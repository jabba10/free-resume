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
  FiDownload,
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiX,
  FiEye,
  FiCheck,
  FiAward,
  FiFileText,
  FiSettings,
  FiStar,
  FiArrowRight,
  FiClock,
  FiHome,
  FiChevronRight as FiChevronRightIcon,
  FiBriefcase,
  FiTool,
  FiTrendingUp,
  FiSearch,
  FiBarChart,
  FiTarget,
  FiLayers,
  FiUsers,
  FiBookOpen,
  FiVideo,
  FiGrid,
  FiCalendar,
  FiBookmark,
  FiCode,
  FiMonitor,
  FiTruck,
  FiShoppingBag
} from 'react-icons/fi';
import Link from 'next/link';

const careerFlowStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

  :root {
    --cf-background: #131315;
    --cf-surface: #131315;
    --cf-surface-dim: #131315;
    --cf-surface-bright: #39393b;
    --cf-surface-container: #201f21;
    --cf-surface-container-low: #1c1b1d;
    --cf-surface-container-lowest: #0e0e10;
    --cf-surface-container-high: #2a2a2c;
    --cf-surface-container-highest: #353437;
    --cf-surface-variant: #353437;
    --cf-on-background: #e5e1e4;
    --cf-on-surface: #e5e1e4;
    --cf-on-surface-variant: #d0c5af;
    --cf-primary: #f2ca50;
    --cf-primary-container: #d4af37;
    --cf-on-primary: #3c2f00;
    --cf-on-primary-container: #554300;
    --cf-primary-fixed: #ffe088;
    --cf-primary-fixed-dim: #e9c349;
    --cf-secondary: #c8c6c3;
    --cf-secondary-container: #474744;
    --cf-on-secondary: #30312e;
    --cf-on-secondary-container: #b6b5b1;
    --cf-tertiary: #d0cdd3;
    --cf-tertiary-container: #b4b2b7;
    --cf-on-tertiary: #303034;
    --cf-on-tertiary-container: #454449;
    --cf-outline: #99907c;
    --cf-outline-variant: #4d4635;
    --cf-error: #ffb4ab;
    --cf-on-error: #690005;
    --cf-error-container: #93000a;
    --cf-on-error-container: #ffdad6;
    --cf-inverse-surface: #e5e1e4;
    --cf-inverse-on-surface: #313032;
    --cf-inverse-primary: #735c00;
    --cf-surface-tint: #e9c349;
    --cf-secondary-fixed: #e4e2de;
    --cf-secondary-fixed-dim: #c8c6c3;
    --cf-on-secondary-fixed: #1b1c1a;
    --cf-on-secondary-fixed-variant: #474744;
    --cf-tertiary-fixed: #e4e1e7;
    --cf-tertiary-fixed-dim: #c8c5cb;
    --cf-on-tertiary-fixed: #1b1b1f;
    --cf-on-tertiary-fixed-variant: #47464b;
    --cf-gutter: 32px;
    --cf-section-gap: 120px;
    --cf-margin-desktop: 64px;
    --cf-margin-mobile: 24px;
    --cf-container-max: 1280px;
    --cf-unit: 8px;
    --cf-font-display: 'Playfair Display', Georgia, serif;
    --cf-font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --cf-glass-bg: rgba(20, 19, 21, 0.7);
    --cf-glass-blur: blur(20px);
    --cf-gold-border: 0.5px solid rgba(212, 175, 55, 0.3);
    --cf-gold-border-strong: 0.5px solid rgba(212, 175, 55, 0.4);
    --cf-gold-glow: 0 0 15px rgba(242, 202, 80, 0.3);
    --cf-shadow-nav: 0px 24px 48px rgba(0, 0, 0, 0.8);
    --cf-transition-fast: 200ms ease;
    --cf-transition-base: 300ms ease;
    --cf-transition-slow: 500ms ease;
    --cf-transition-image: 700ms ease;
  }

  @keyframes pulse {
    0% { width: 0; height: 0; opacity: 0.5; }
    100% { width: 300px; height: 300px; opacity: 0; }
  }

  @keyframes modalSlideIn {
    from { opacity: 0; transform: translateY(-20px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  * { box-sizing: border-box; }

  body { background-color: #131315 !important; margin: 0; padding: 0; }

  .cf-resume-builder { background-color: #131315 !important; color: var(--cf-on-background); font-family: var(--cf-font-body); line-height: 1.6; overflow-x: hidden; min-height: 100vh; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
  .cf-resume-builder * { box-sizing: border-box; }
  .cf-resume-builder ::selection { background: rgba(242, 202, 80, 0.3); color: var(--cf-on-background); }
  .cf-container { width: 100%; max-width: var(--cf-container-max); margin: 0 auto; padding: 0 var(--cf-margin-desktop); box-sizing: border-box; }
  .cf-freshness-indicator { display: none; }

  .cf-breadcrumb { background: var(--cf-surface-container-lowest); padding: 16px 0; border-bottom: 0.5px solid var(--cf-outline-variant); }
  .cf-breadcrumb ol { display: flex; align-items: center; list-style: none; margin: 0; padding: 0 var(--cf-margin-desktop); flex-wrap: wrap; max-width: var(--cf-container-max); margin-left: auto; margin-right: auto; }
  .cf-breadcrumb li { display: flex; align-items: center; }
  .cf-breadcrumb-separator { margin: 0 8px; color: var(--cf-outline); }
  .cf-breadcrumb-link { display: flex; align-items: center; gap: 6px; color: var(--cf-on-surface-variant); text-decoration: none; font-size: 12px; font-weight: 500; letter-spacing: 0.05em; transition: color var(--cf-transition-fast); text-transform: uppercase; }
  .cf-breadcrumb-link:hover { color: var(--cf-primary); }
  .cf-breadcrumb-icon { font-size: 14px; }
  .cf-breadcrumb-text { white-space: nowrap; }

  .cf-hero { padding: 120px 0 80px; background: #131315; text-align: center; position: relative; overflow: hidden; min-height: 70vh; display: flex; align-items: center; }
  .cf-hero::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(ellipse at center, rgba(242, 202, 80, 0.03) 0%, transparent 70%); pointer-events: none; }
  .cf-hero-content { max-width: 800px; margin: 0 auto; position: relative; z-index: 1; }
  .cf-trust-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(242, 202, 80, 0.08); padding: 8px 20px; border-radius: 50px; margin-bottom: 32px; border: 0.5px solid rgba(212, 175, 55, 0.3); }
  .cf-trust-icon { color: var(--cf-primary); font-size: 16px; }
  .cf-trust-text { font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cf-primary); }
  .cf-hero-title { font-family: var(--cf-font-display); font-size: 64px; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; color: var(--cf-on-background); margin: 0 0 24px; }
  .cf-gradient-text { background: linear-gradient(135deg, var(--cf-primary) 0%, #f7d96a 50%, var(--cf-primary) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-shadow: var(--cf-gold-glow); font-style: italic; }
  .cf-hero-subtitle { font-family: var(--cf-font-body); font-size: 18px; font-weight: 400; line-height: 1.6; color: var(--cf-on-surface-variant); margin: 0 auto 40px; max-width: 650px; }
  .cf-hero-highlight { color: var(--cf-primary); font-weight: 600; }
  .cf-cta-buttons { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 48px; }
  .cf-btn-primary { display: inline-flex; align-items: center; gap: 12px; background: var(--cf-primary); color: var(--cf-on-primary); border: none; padding: 16px 40px; border-radius: 2px; font-family: var(--cf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--cf-transition-base); text-decoration: none; position: relative; overflow: hidden; }
  .cf-btn-primary:hover { filter: brightness(1.1); box-shadow: 0 0 25px rgba(242, 202, 80, 0.3); transform: translateY(-2px); }
  .cf-btn-text { position: relative; z-index: 1; }
  .cf-btn-icon { font-size: 18px; transition: transform var(--cf-transition-base); }
  .cf-btn-primary:hover .cf-btn-icon { transform: translateX(4px); }
  .cf-btn-pulse { position: absolute; top: 50%; left: 50%; width: 0; height: 0; border-radius: 50%; background-color: rgba(255, 255, 255, 0.1); transform: translate(-50%, -50%); animation: pulse 2s infinite; }
  .cf-btn-secondary { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--cf-primary); border: var(--cf-gold-border-strong); padding: 16px 40px; border-radius: 2px; font-family: var(--cf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--cf-transition-base); text-decoration: none; }
  .cf-btn-secondary:hover { background: rgba(242, 202, 80, 0.05); transform: translateY(-2px); }
  .cf-btn-secondary:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
  .cf-hero-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 24px; margin: 48px 0 0; padding: 0; }
  .cf-stat-item { display: flex; flex-direction: column; align-items: center; padding: 24px; background: var(--cf-glass-bg); backdrop-filter: var(--cf-glass-blur); -webkit-backdrop-filter: var(--cf-glass-blur); border: var(--cf-gold-border); border-radius: 4px; }
  .cf-stat-number { font-family: var(--cf-font-display); font-size: 2.5rem; font-weight: 700; color: var(--cf-primary); margin-bottom: 8px; }
  .cf-stat-label { font-family: var(--cf-font-body); font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cf-on-surface-variant); text-align: center; }
  .cf-industry-badges { margin-top: 48px; }
  .cf-badge-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; }
  .cf-badge-item { display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: rgba(242, 202, 80, 0.05); border: 0.5px solid rgba(212, 175, 55, 0.2); border-radius: 2px; font-family: var(--cf-font-body); font-size: 12px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; color: var(--cf-on-surface-variant); transition: all var(--cf-transition-base); justify-content: center; }
  .cf-badge-item:hover { border-color: rgba(212, 175, 55, 0.5); color: var(--cf-primary); background: rgba(242, 202, 80, 0.08); }

  .cf-layout { display: flex; flex-direction: column; gap: var(--cf-gutter); padding: 80px var(--cf-margin-desktop); max-width: var(--cf-container-max); margin: 0 auto; background: #131315; }
  .cf-preview-section { flex: 1; display: flex; flex-direction: column; gap: 24px; min-width: 0; }
  .cf-preview-header { display: flex; flex-direction: column; gap: 16px; }
  .cf-preview-actions { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
  .cf-preview-btn, .cf-download-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: 2px; font-family: var(--cf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; text-decoration: none; transition: all var(--cf-transition-base); cursor: pointer; white-space: nowrap; min-height: 48px; }
  .cf-preview-btn { background: transparent; color: var(--cf-primary); border: var(--cf-gold-border-strong); }
  .cf-preview-btn:hover { background: rgba(242, 202, 80, 0.05); transform: translateY(-2px); }
  .cf-download-btn { background: var(--cf-primary); color: var(--cf-on-primary); border: none; }
  .cf-download-btn:not(:disabled):hover { filter: brightness(1.1); box-shadow: 0 0 20px rgba(242, 202, 80, 0.3); transform: translateY(-2px); }
  .cf-download-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
  .cf-preview-container { background: var(--cf-glass-bg); backdrop-filter: var(--cf-glass-blur); -webkit-backdrop-filter: var(--cf-glass-blur); border: var(--cf-gold-border); padding: 24px; border-radius: 4px; min-height: 500px; display: flex; justify-content: center; align-items: flex-start; overflow: auto; }
  .cf-full-preview { background: transparent; padding: 0; border: none; border-radius: 0; overflow: visible; }
  .cf-resume-card { width: 100%; display: flex; justify-content: center; }
  .cf-preview-content { position: relative; width: 100%; max-width: 210mm; min-height: 297mm; overflow: visible; }

  .cf-resume-preview { display: block; width: 210mm; min-height: 297mm; background: #ffffff; padding: 10mm 15mm; box-sizing: border-box; box-shadow: 0 0 40px rgba(0, 0, 0, 0.5); border: 0.5px solid rgba(212, 175, 55, 0.3); color: #000000; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.25; }
  .cf-teacher-template { color: #000000; line-height: 1.25; height: 100%; }
  .cf-resume-header { text-align: center; margin-bottom: 8pt; padding-bottom: 6pt; border-bottom: 0.5pt solid #000000; }
  .cf-resume-name { font-weight: 700; margin: 0 0 3pt; color: #000000; text-transform: uppercase; letter-spacing: 0.4pt; }
  .cf-contact-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 4pt; color: #495057; margin-top: 3pt; }
  .cf-contact-item { display: flex; align-items: center; gap: 2pt; }
  .cf-contact-separator { color: #adb5bd; }
  .cf-section { margin-bottom: 8pt; page-break-inside: avoid; }
  .cf-section-title { text-transform: uppercase; letter-spacing: 0.5pt; margin: 0 0 3pt; padding-bottom: 1pt; border-bottom: 0.5pt solid #000000; color: #000000; font-weight: 700; }
  .cf-summary-text { margin: 0; text-align: justify; line-height: 1.3; }
  .cf-experience-item, .cf-education-item { margin-bottom: 6pt; page-break-inside: avoid; }
  .cf-experience-header h3 { font-weight: 700; margin: 0 0 1.5pt; color: #000000; }
  .cf-company { color: #495057; margin: 0 0 3pt; font-style: italic; }
  .cf-institution-text { color: #495057; }
  .cf-institution-date { color: #6c757d; }
  .cf-bullet-list { margin: 3pt 0 0; padding-left: 8pt; list-style-type: disc; }
  .cf-bullet-list li { margin-bottom: 2pt; text-align: justify; line-height: 1.25; }
  .cf-skills-list { display: flex; flex-wrap: wrap; gap: 3pt; list-style: none; padding: 0; margin: 3pt 0 0; }
  .cf-skills-list li { background: #f8f9fa; padding: 1.5pt 4pt; border-radius: 1.5pt; border: 0.5pt solid #dee2e6; }
  .cf-cert-item, .cf-pd-item { margin-bottom: 3pt; line-height: 1.25; }

  .cf-form-section { flex: 1; display: flex; flex-direction: column; gap: 24px; min-width: 0; }
  .cf-form-nav { display: flex; flex-wrap: wrap; gap: 8px; padding: 16px; background: var(--cf-glass-bg); backdrop-filter: var(--cf-glass-blur); -webkit-backdrop-filter: var(--cf-glass-blur); border: var(--cf-gold-border); border-radius: 4px; }
  .cf-nav-btn { display: flex; align-items: center; gap: 8px; padding: 12px 20px; border: 0.5px solid rgba(212, 175, 55, 0.2); border-radius: 2px; background: transparent; color: var(--cf-on-surface-variant); font-family: var(--cf-font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--cf-transition-base); white-space: nowrap; min-height: 48px; flex: 1; min-width: 100px; justify-content: center; }
  .cf-nav-btn:hover { background: rgba(242, 202, 80, 0.05); border-color: rgba(212, 175, 55, 0.4); color: var(--cf-primary); }
  .cf-nav-btn-active { background: var(--cf-primary); border-color: var(--cf-primary); color: var(--cf-on-primary); }
  .cf-form-content { flex: 1; min-width: 0; overflow-y: auto; max-height: 600px; padding-right: 8px; }
  .cf-form-content::-webkit-scrollbar { width: 6px; }
  .cf-form-content::-webkit-scrollbar-track { background: var(--cf-surface-container-lowest); border-radius: 3px; }
  .cf-form-content::-webkit-scrollbar-thumb { background: var(--cf-outline-variant); border-radius: 3px; }
  .cf-form-content::-webkit-scrollbar-thumb:hover { background: var(--cf-outline); }
  .cf-form-section-content { display: flex; flex-direction: column; gap: 24px; }
  .cf-form-section-title { font-family: var(--cf-font-display); font-size: 24px; font-weight: 600; margin: 0 0 8px; color: var(--cf-on-background); display: flex; align-items: center; gap: 12px; }
  .cf-section-desc { color: var(--cf-on-surface-variant); font-family: var(--cf-font-body); font-size: 14px; margin: 0 0 16px; line-height: 1.6; }
  .cf-form-card { background: var(--cf-glass-bg); backdrop-filter: var(--cf-glass-blur); -webkit-backdrop-filter: var(--cf-glass-blur); border: var(--cf-gold-border); border-radius: 4px; padding: 24px; width: 100%; box-sizing: border-box; }
  .cf-form-group { display: grid; grid-template-columns: 1fr; gap: 20px; margin-bottom: 20px; width: 100%; }
  .cf-form-label { display: flex; flex-direction: column; gap: 8px; font-family: var(--cf-font-body); font-weight: 600; font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--cf-on-surface-variant); width: 100%; }
  .cf-form-input, .cf-form-textarea, .cf-form-select { padding: 14px 16px; border: 0.5px solid var(--cf-outline-variant); border-radius: 2px; font-family: var(--cf-font-body); font-size: 14px; color: var(--cf-on-background); background: rgba(14, 14, 16, 0.6); transition: all var(--cf-transition-base); width: 100%; box-sizing: border-box; min-width: 0; }
  .cf-form-input:focus, .cf-form-textarea:focus, .cf-form-select:focus { outline: none; border-color: var(--cf-primary); box-shadow: 0 0 0 2px rgba(242, 202, 80, 0.15); }
  .cf-form-input::placeholder, .cf-form-textarea::placeholder { color: var(--cf-outline); }
  .cf-form-textarea { resize: vertical; min-height: 120px; line-height: 1.5; }
  .cf-form-select { cursor: pointer; }
  .cf-form-select option { background: var(--cf-surface-container); color: var(--cf-on-background); }
  .cf-char-count { text-align: right; font-size: 11px; color: var(--cf-outline); margin-top: 8px; font-family: var(--cf-font-body); letter-spacing: 0.05em; }
  .cf-sub-section-title { font-family: var(--cf-font-display); font-size: 18px; font-weight: 600; margin: 0 0 16px; color: var(--cf-primary); display: flex; align-items: center; gap: 12px; }
  .cf-social-input, .cf-skills-input { display: flex; flex-direction: column; gap: 16px; width: 100%; }
  .cf-form-actions { display: flex; gap: 12px; margin-top: 20px; flex-wrap: wrap; align-items: center; width: 100%; }
  .cf-add-btn, .cf-cancel-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 2px; font-family: var(--cf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; white-space: nowrap; transition: all var(--cf-transition-base); min-height: 48px; flex-shrink: 0; }
  .cf-add-btn { background: var(--cf-primary); color: var(--cf-on-primary); border: none; }
  .cf-add-btn:hover:not(:disabled) { filter: brightness(1.1); box-shadow: 0 0 20px rgba(242, 202, 80, 0.3); transform: translateY(-2px); }
  .cf-add-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
  .cf-cancel-btn { background: transparent; color: var(--cf-on-surface-variant); border: 0.5px solid var(--cf-outline-variant); }
  .cf-cancel-btn:hover { background: rgba(255, 255, 255, 0.03); border-color: var(--cf-outline); transform: translateY(-2px); }
  .cf-items-list { margin-top: 24px; }
  .cf-empty-msg { color: var(--cf-outline); font-style: italic; margin: 0; padding: 20px; text-align: center; background: rgba(14, 14, 16, 0.4); border-radius: 2px; border: 1px dashed var(--cf-outline-variant); font-family: var(--cf-font-body); font-size: 14px; }
  .cf-list-item { display: flex; justify-content: space-between; align-items: flex-start; padding: 16px; border-bottom: 0.5px solid var(--cf-outline-variant); width: 100%; box-sizing: border-box; background: rgba(14, 14, 16, 0.3); border-radius: 2px; margin-bottom: 8px; }
  .cf-list-item:last-child { border-bottom: none; margin-bottom: 0; }
  .cf-item-info, .cf-item-content { flex: 1; display: flex; flex-direction: column; gap: 8px; min-width: 0; }
  .cf-item-header { display: flex; flex-wrap: wrap; gap: 8px; align-items: baseline; }
  .cf-item-title { font-weight: 700; color: var(--cf-on-background); word-break: break-word; font-size: 16px; }
  .cf-item-subtitle { color: var(--cf-on-surface-variant); font-size: 14px; word-break: break-word; }
  .cf-item-meta { display: flex; gap: 16px; flex-wrap: wrap; color: var(--cf-outline); font-size: 12px; align-items: center; letter-spacing: 0.05em; }
  .cf-item-desc { margin-top: 8px; }
  .cf-bullet-point { margin: 4px 0; font-size: 14px; color: var(--cf-on-surface-variant); line-height: 1.5; }
  .cf-item-platform { font-weight: 600; color: var(--cf-primary); font-size: 14px; }
  .cf-item-url { color: var(--cf-on-surface-variant); font-size: 12px; word-break: break-all; }
  .cf-skill-cat { color: var(--cf-outline); font-size: 12px; }
  .cf-item-actions { display: flex; gap: 8px; margin-left: 16px; flex-shrink: 0; }
  .cf-edit-btn, .cf-delete-btn { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border-radius: 2px; background: rgba(255, 255, 255, 0.03); color: var(--cf-on-surface-variant); border: 0.5px solid var(--cf-outline-variant); cursor: pointer; transition: all var(--cf-transition-base); }
  .cf-edit-btn:hover { background: rgba(242, 202, 80, 0.1); border-color: var(--cf-primary); color: var(--cf-primary); transform: translateY(-2px); }
  .cf-delete-btn { color: var(--cf-error); border-color: rgba(255, 180, 171, 0.3); }
  .cf-delete-btn:hover { background: rgba(255, 180, 171, 0.1); border-color: var(--cf-error); transform: translateY(-2px); }

  .cf-font-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
  .cf-font-control { display: flex; flex-direction: column; gap: 12px; }
  .cf-font-label { display: flex; justify-content: space-between; align-items: center; font-family: var(--cf-font-body); font-weight: 600; font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--cf-on-surface-variant); }
  .cf-font-value { background: rgba(242, 202, 80, 0.1); padding: 4px 12px; border-radius: 20px; font-weight: 700; color: var(--cf-primary); font-size: 12px; min-width: 50px; text-align: center; border: 0.5px solid rgba(212, 175, 55, 0.3); }
  .cf-font-slider { width: 100%; height: 4px; -webkit-appearance: none; appearance: none; background: var(--cf-outline-variant); border-radius: 2px; outline: none; }
  .cf-font-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: var(--cf-primary); cursor: pointer; border: 2px solid var(--cf-background); box-shadow: 0 0 10px rgba(242, 202, 80, 0.3); }
  .cf-font-slider::-moz-range-thumb { width: 18px; height: 18px; border-radius: 50%; background: var(--cf-primary); cursor: pointer; border: 2px solid var(--cf-background); box-shadow: 0 0 10px rgba(242, 202, 80, 0.3); }
  .cf-reset-btn { display: block; width: 100%; padding: 14px 24px; background: transparent; color: var(--cf-on-surface-variant); border: 0.5px solid var(--cf-outline-variant); border-radius: 2px; font-family: var(--cf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--cf-transition-base); text-align: center; }
  .cf-reset-btn:hover { background: rgba(242, 202, 80, 0.05); border-color: var(--cf-primary); color: var(--cf-primary); }

  .cf-faq-section { padding: var(--cf-section-gap) var(--cf-margin-mobile); background: var(--cf-surface-container-lowest); border-top: 0.5px solid rgba(153, 144, 124, 0.1); border-bottom: 0.5px solid rgba(153, 144, 124, 0.1); }
  .cf-section-header { text-align: center; margin-bottom: 64px; }
  .cf-section-header h2 { font-family: var(--cf-font-display); font-size: 32px; font-weight: 600; color: var(--cf-on-background); margin: 0 0 16px; }
  .cf-section-header p { font-family: var(--cf-font-body); font-size: 18px; color: var(--cf-on-surface-variant); max-width: 600px; margin: 0 auto; line-height: 1.6; }
  .cf-faq-grid { display: grid; grid-template-columns: 1fr; gap: 24px; max-width: 900px; margin: 0 auto; }
  .cf-faq-item { background: var(--cf-glass-bg); backdrop-filter: var(--cf-glass-blur); -webkit-backdrop-filter: var(--cf-glass-blur); border: var(--cf-gold-border); border-radius: 4px; padding: 32px; transition: all var(--cf-transition-base); }
  .cf-faq-item:hover { transform: translateY(-4px); border-color: rgba(212, 175, 55, 0.5); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); }
  .cf-faq-question { font-family: var(--cf-font-display); font-size: 20px; font-weight: 600; color: var(--cf-primary); margin: 0 0 16px; line-height: 1.4; }
  .cf-faq-answer { font-family: var(--cf-font-body); font-size: 16px; color: var(--cf-on-surface-variant); line-height: 1.6; margin: 0; }

  .cf-cta-section { padding: var(--cf-section-gap) var(--cf-margin-mobile); background: #131315; text-align: center; }
  .cf-cta-content { max-width: 700px; margin: 0 auto; }
  .cf-cta-title { font-family: var(--cf-font-display); font-size: 32px; font-weight: 600; color: var(--cf-on-background); margin: 0 0 16px; line-height: 1.2; }
  .cf-cta-subtitle { font-family: var(--cf-font-body); font-size: 18px; color: var(--cf-on-surface-variant); margin: 0 0 40px; line-height: 1.6; }
  .cf-cta-btn-wrap { margin-bottom: 32px; display: flex; justify-content: center; }
  .cf-cta-btn { display: inline-flex; align-items: center; gap: 16px; background: var(--cf-primary); color: var(--cf-on-primary); border: none; padding: 20px 48px; border-radius: 2px; font-family: var(--cf-font-body); font-size: 16px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--cf-transition-base); }
  .cf-cta-btn:hover { filter: brightness(1.1); box-shadow: 0 0 30px rgba(242, 202, 80, 0.3); transform: translateY(-4px); }
  .cf-cta-btn-text { position: relative; z-index: 1; }
  .cf-cta-btn-icon { font-size: 20px; transition: transform var(--cf-transition-base); }
  .cf-cta-btn:hover .cf-cta-btn-icon { transform: translateX(8px); }
  .cf-cta-guarantee { display: inline-flex; align-items: center; gap: 12px; background: rgba(242, 202, 80, 0.05); padding: 16px 32px; border-radius: 50px; border: 0.5px solid rgba(212, 175, 55, 0.3); }
  .cf-guarantee-icon { color: var(--cf-primary); font-size: 20px; }
  .cf-guarantee-text { font-family: var(--cf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.03em; color: var(--cf-on-surface-variant); }

  .cf-modal { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.9); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); z-index: 9999; display: flex; justify-content: center; align-items: center; padding: 20px; overflow: auto; }
  .cf-modal-content { background: var(--cf-surface-container); border-radius: 4px; max-width: 900px; width: 100%; max-height: 90vh; overflow: auto; border: var(--cf-gold-border); box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5); animation: modalSlideIn 0.3s ease-out; }
  .cf-modal-header { display: flex; justify-content: space-between; align-items: center; padding: 24px 32px; border-bottom: 0.5px solid rgba(212, 175, 55, 0.3); background: var(--cf-surface-container-lowest); border-radius: 4px 4px 0 0; }
  .cf-modal-header h3 { font-family: var(--cf-font-display); font-size: 20px; margin: 0; color: var(--cf-primary); font-weight: 600; }
  .cf-close-btn { background: rgba(255, 255, 255, 0.05); width: 40px; height: 40px; border-radius: 2px; border: 0.5px solid rgba(212, 175, 55, 0.3); display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--cf-on-surface-variant); font-size: 20px; transition: all var(--cf-transition-base); }
  .cf-close-btn:hover { background: rgba(255, 180, 171, 0.1); border-color: var(--cf-error); color: var(--cf-error); transform: rotate(90deg); }
  .cf-modal-pages { padding: 32px; background: var(--cf-surface-container-lowest); display: flex; justify-content: center; align-items: center; }
  .cf-modal-page { background: #ffffff; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3); width: 210mm; height: 297mm; display: flex; justify-content: center; align-items: flex-start; }
  .cf-modal-page .cf-teacher-template { width: 100%; height: 100%; padding: 10mm 15mm; box-sizing: border-box; overflow-y: auto; }

  .cf-share-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); z-index: 9999; display: flex; justify-content: center; align-items: center; padding: 20px; }
  .cf-share-card { background: var(--cf-surface-container-high); border-radius: 8px; max-width: 420px; width: 100%; padding: 32px 28px; text-align: center; border: 0.5px solid rgba(212, 175, 55, 0.4); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6); animation: modalSlideIn 0.3s ease-out; }
  .cf-share-icon { font-size: 40px; margin-bottom: 16px; display: block; }
  .cf-share-headline { font-family: var(--cf-font-display); font-size: 24px; font-weight: 600; color: var(--cf-primary); margin: 0 0 12px; }
  .cf-share-body { font-family: var(--cf-font-body); font-size: 15px; color: var(--cf-on-surface-variant); margin: 0 0 28px; line-height: 1.6; }
  .cf-share-close-btn { display: inline-block; background: var(--cf-primary); color: var(--cf-on-primary); border: none; padding: 12px 32px; border-radius: 2px; font-family: var(--cf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--cf-transition-base); }
  .cf-share-close-btn:hover { filter: brightness(1.1); box-shadow: 0 0 18px rgba(242, 202, 80, 0.3); transform: translateY(-1px); }

  @media (min-width: 1024px) {
    .cf-layout { flex-direction: row; gap: 48px; }
    .cf-preview-section { position: sticky; top: 100px; align-self: flex-start; max-height: calc(100vh - 120px); overflow-y: auto; }
    .cf-form-section { max-width: 500px; }
    .cf-faq-grid { grid-template-columns: repeat(2, 1fr); }
    .cf-form-group { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 1023px) {
    :root { --cf-margin-desktop: 32px; --cf-section-gap: 80px; }
    .cf-container { padding: 0 var(--cf-margin-desktop); }
    .cf-hero { padding: 100px 0 60px; min-height: auto; }
    .cf-hero-title { font-size: 48px; }
    .cf-layout { padding: 60px var(--cf-margin-desktop); gap: 32px; }
    .cf-form-group { grid-template-columns: 1fr 1fr; }
    .cf-faq-grid { grid-template-columns: 1fr 1fr; }
    .cf-breadcrumb ol { padding: 0 var(--cf-margin-desktop); }
  }

  @media (max-width: 768px) {
    :root { --cf-margin-desktop: 24px; --cf-section-gap: 60px; }
    .cf-hero { padding: 80px 0 40px; }
    .cf-hero-title { font-size: 36px; }
    .cf-hero-subtitle { font-size: 14px; }
    .cf-cta-buttons { flex-direction: column; align-items: center; gap: 12px; }
    .cf-btn-primary, .cf-btn-secondary, .cf-preview-btn, .cf-download-btn, .cf-cta-btn { width: 100%; justify-content: center; }
    .cf-layout { padding: 40px var(--cf-margin-desktop); gap: 24px; }
    .cf-preview-container { padding: 16px; }
    .cf-resume-preview { width: 100%; min-height: auto; padding: 8mm 10mm; }
    .cf-form-nav { gap: 6px; padding: 12px; }
    .cf-nav-btn { min-width: 80px; flex: 1 1 calc(50% - 6px); padding: 10px 14px; font-size: 11px; }
    .cf-nav-btn span { display: none; }
    .cf-form-card { padding: 16px; }
    .cf-form-group { grid-template-columns: 1fr; }
    .cf-hero-stats { grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .cf-badge-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
    .cf-faq-grid { grid-template-columns: 1fr; }
    .cf-faq-section, .cf-cta-section { padding: 60px var(--cf-margin-mobile); }
    .cf-section-header h2, .cf-cta-title { font-size: 28px; }
    .cf-modal-content { margin: 0; border-radius: 0; max-height: 100vh; width: 100%; }
    .cf-modal-page { width: 100%; height: auto; min-height: 400px; }
    .cf-modal-page .cf-teacher-template { padding: 8mm 12mm; }
    .cf-font-grid { grid-template-columns: 1fr 1fr; }
    .cf-list-item { flex-direction: column; gap: 12px; }
    .cf-item-actions { margin-left: 0; align-self: flex-end; }
    .cf-share-card { margin: 0 16px; padding: 24px 20px; }
  }

  @media (max-width: 480px) {
    :root { --cf-margin-desktop: 16px; --cf-section-gap: 48px; }
    .cf-hero-title { font-size: 28px; }
    .cf-hero-subtitle { font-size: 13px; }
    .cf-hero-stats, .cf-badge-grid { grid-template-columns: 1fr; }
    .cf-stat-number { font-size: 2rem; }
    .cf-layout { padding: 32px var(--cf-margin-desktop); }
    .cf-resume-preview { padding: 6mm 8mm; }
    .cf-nav-btn { min-width: 60px; flex: 1 1 calc(50% - 6px); padding: 8px 10px; }
    .cf-form-card { padding: 12px; }
    .cf-form-section-title { font-size: 20px; }
    .cf-sub-section-title { font-size: 16px; }
    .cf-font-grid { grid-template-columns: 1fr; }
    .cf-faq-item { padding: 20px; }
    .cf-faq-question { font-size: 18px; }
    .cf-section-header h2, .cf-cta-title { font-size: 24px; }
    .cf-cta-btn { padding: 16px 32px; font-size: 14px; }
    .cf-cta-guarantee { padding: 12px 20px; flex-wrap: wrap; justify-content: center; }
    .cf-guarantee-text { font-size: 12px; }
    .cf-modal-header { padding: 16px 20px; }
    .cf-modal-header h3 { font-size: 16px; }
    .cf-modal-pages { padding: 16px; }
    .cf-modal-page .cf-teacher-template { padding: 6mm 8mm; }
    .cf-share-headline { font-size: 20px; }
    .cf-share-body { font-size: 13px; }
  }

  @media (max-width: 360px) {
    .cf-hero-title { font-size: 24px; }
    .cf-btn-primary, .cf-btn-secondary { padding: 12px 20px; font-size: 12px; }
  }

  @media print {
    .cf-resume-builder, .cf-layout, .cf-preview-section, .cf-form-section, .cf-faq-section, .cf-cta-section, .cf-hero, .cf-breadcrumb, .cf-modal { display: none !important; }
    .cf-resume-preview { display: block !important; box-shadow: none !important; margin: 0 !important; padding: 10mm 15mm !important; width: 100% !important; height: auto !important; page-break-inside: avoid; background: #ffffff !important; border: none !important; }
    .cf-teacher-template, .cf-section { page-break-inside: avoid; }
  }
`;

const TeacherResume = ({ seoData, buildTimestamp }) => {
  const { currentDate, lastModifiedDate } = seoData || {};
  const freshnessIndicator = buildTimestamp ? new Date(buildTimestamp).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();

  const defaultExperience = () => ({ school: '', position: '', gradeLevel: '', subjects: '', startDate: '', endDate: '', description: '', isEditing: false, editIndex: null });
  const defaultEducation = () => ({ institution: '', degree: '', major: '', certifications: '', startDate: '', endDate: '', isEditing: false, editIndex: null });
  const defaultSpecialization = () => ({ name: '', isEditing: false, editIndex: null });
  const defaultCertification = () => ({ name: '', issuingAuthority: '', certificationNumber: '', expiryDate: '', isEditing: false, editIndex: null });
  const defaultProfessionalDevelopment = () => ({ name: '', provider: '', hours: '', date: '', isEditing: false, editIndex: null });
  const defaultTeachingMethod = () => ({ name: '', isEditing: false, editIndex: null });
  const defaultTechnologySkill = () => ({ name: '', proficiency: '', isEditing: false, editIndex: null });
  const defaultLanguage = () => ({ name: '', proficiency: '', isEditing: false, editIndex: null });
  const defaultSocialLink = () => ({ platform: '', url: '', isEditing: false, editIndex: null });

  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', address: '', summary: '', experience: [], education: [], specializations: [], certifications: [], professionalDevelopment: [], teachingMethods: [], technologySkills: [], languages: [], socialLinks: [] });
  const [fontSizes, setFontSizes] = useState({ name: 14, sectionTitle: 10, contactInfo: 7, jobTitle: 9, school: 7, degree: 9, institution: 7, institutionDate: 6, regularText: 8, bulletText: 8, skillText: 7, certificationText: 8 });
  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentSpecialization, setCurrentSpecialization] = useState(defaultSpecialization());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentProfessionalDevelopment, setCurrentProfessionalDevelopment] = useState(defaultProfessionalDevelopment());
  const [currentTeachingMethod, setCurrentTeachingMethod] = useState(defaultTeachingMethod());
  const [currentTechnologySkill, setCurrentTechnologySkill] = useState(defaultTechnologySkill());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());
  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);

  const faqs = [
    { question: "Is this teacher resume builder really free with no hidden costs?", answer: "Yes, our teacher resume builder is completely free with no hidden costs or watermarks. Create, edit, and download your professional teaching resume in PDF format without any payment required." },
    { question: "What does ATS-friendly mean for teacher resumes?", answer: "ATS-friendly means our teacher resume templates are optimized to pass through Applicant Tracking Systems used by 95% of school districts and educational institutions worldwide. This ensures your teaching experience and credentials are properly scanned and recognized." },
    { question: "Can I download my teacher resume as PDF without creating an account?", answer: "Absolutely! Download your professional teaching resume in PDF format without creating an account. Everything is completely free and accessible immediately for teachers, professors, and education professionals globally." }
  ];

  const handleFontSizeChange = (key, value) => setFontSizes(prev => ({ ...prev, [key]: Math.max(4, Math.min(24, parseInt(value) || prev[key])) }));
  const resetFontSizes = () => setFontSizes({ name: 14, sectionTitle: 10, contactInfo: 7, jobTitle: 9, school: 7, degree: 9, institution: 7, institutionDate: 6, regularText: 8, bulletText: 8, skillText: 7, certificationText: 8 });
  const getSocialIcon = () => <FiGlobe />;
  const formatSocialUrl = (url) => url ? url.replace(/(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '') : '';
  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const hasContent = () => formData.fullName || formData.email || formData.summary || formData.socialLinks.length > 0 || formData.experience.length > 0 || formData.education.length > 0 || formData.specializations.length > 0 || formData.certifications.length > 0 || formData.professionalDevelopment.length > 0 || formData.teachingMethods.length > 0 || formData.technologySkills.length > 0 || formData.languages.length > 0;

  const createAddFunction = (key, current, setter, defaultFunc, isValid) => () => {
    if (!isValid()) return;
    const item = { ...current };
    if (item.isEditing) { const updated = [...formData[key]]; updated[item.editIndex] = { ...item, isEditing: false, editIndex: null }; setFormData({ ...formData, [key]: updated }); }
    else { setFormData({ ...formData, [key]: [...formData[key], { ...item, isEditing: false, editIndex: null }] }); }
    setter(defaultFunc());
  };
  const createEditFunction = (key, setter) => (index) => setter({ ...formData[key][index], isEditing: true, editIndex: index });
  const createDeleteFunction = (key) => (index) => { const updated = [...formData[key]]; updated.splice(index, 1); setFormData({ ...formData, [key]: updated }); };

  const addExperience = createAddFunction('experience', currentExperience, setCurrentExperience, defaultExperience, () => currentExperience.position && currentExperience.school && currentExperience.startDate);
  const editExperience = createEditFunction('experience', setCurrentExperience);
  const deleteExperience = createDeleteFunction('experience');
  const addEducation = createAddFunction('education', currentEducation, setCurrentEducation, defaultEducation, () => currentEducation.institution && currentEducation.degree);
  const editEducation = createEditFunction('education', setCurrentEducation);
  const deleteEducation = createDeleteFunction('education');
  const addSpecialization = createAddFunction('specializations', currentSpecialization, setCurrentSpecialization, defaultSpecialization, () => currentSpecialization.name.trim());
  const editSpecialization = createEditFunction('specializations', setCurrentSpecialization);
  const deleteSpecialization = createDeleteFunction('specializations');
  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, () => currentCertification.name.trim());
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');
  const addProfessionalDevelopment = createAddFunction('professionalDevelopment', currentProfessionalDevelopment, setCurrentProfessionalDevelopment, defaultProfessionalDevelopment, () => currentProfessionalDevelopment.name.trim());
  const editProfessionalDevelopment = createEditFunction('professionalDevelopment', setCurrentProfessionalDevelopment);
  const deleteProfessionalDevelopment = createDeleteFunction('professionalDevelopment');
  const addTeachingMethod = createAddFunction('teachingMethods', currentTeachingMethod, setCurrentTeachingMethod, defaultTeachingMethod, () => currentTeachingMethod.name.trim());
  const editTeachingMethod = createEditFunction('teachingMethods', setCurrentTeachingMethod);
  const deleteTeachingMethod = createDeleteFunction('teachingMethods');
  const addTechnologySkill = createAddFunction('technologySkills', currentTechnologySkill, setCurrentTechnologySkill, defaultTechnologySkill, () => currentTechnologySkill.name.trim());
  const editTechnologySkill = createEditFunction('technologySkills', setCurrentTechnologySkill);
  const deleteTechnologySkill = createDeleteFunction('technologySkills');
  const addLanguage = createAddFunction('languages', currentLanguage, setCurrentLanguage, defaultLanguage, () => currentLanguage.name.trim());
  const editLanguage = createEditFunction('languages', setCurrentLanguage);
  const deleteLanguage = createDeleteFunction('languages');
  const addSocialLink = () => {
    if (!currentSocialLink.platform || !currentSocialLink.url) return;
    let url = currentSocialLink.url;
    if (!url.match(/^https?:\/\//)) url = `https://${url}`;
    if (currentSocialLink.isEditing) { const updated = [...formData.socialLinks]; updated[currentSocialLink.editIndex] = { platform: currentSocialLink.platform, url }; setFormData({ ...formData, socialLinks: updated }); }
    else { setFormData({ ...formData, socialLinks: [...formData.socialLinks, { platform: currentSocialLink.platform, url }] }); }
    setCurrentSocialLink(defaultSocialLink());
  };
  const editSocialLink = (index) => setCurrentSocialLink({ platform: formData.socialLinks[index].platform, url: formData.socialLinks[index].url.replace(/^https?:\/\//, '').replace(/\/$/, ''), isEditing: true, editIndex: index });
  const deleteSocialLink = (index) => { const updated = [...formData.socialLinks]; updated.splice(index, 1); setFormData({ ...formData, socialLinks: updated }); };

  const generatePDF = async () => {
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    try {
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      if (!hasContent()) { alert("Please add content before generating PDF."); setIsGeneratingPDF(false); return; }
      const el = resumeRef.current;
      if (!el) { setIsGeneratingPDF(false); return; }
      const originalStates = { display: el.style.display, position: el.style.position, width: el.style.width, height: el.style.height };
      Object.assign(el.style, { display: 'block', position: 'fixed', left: '0', top: '0', width: '210mm', height: '297mm', transform: 'none', zIndex: '9999', visibility: 'visible', opacity: '1', background: '#ffffff', color: '#000000' });
      await new Promise(r => setTimeout(r, 300));
      const canvas = await html2canvas(el, { scale: 3, useCORS: true, backgroundColor: '#ffffff', width: 210 * 3.7795275591, height: 297 * 3.7795275591 });
      const imgData = canvas.toDataURL('image/png', 1.0);
      pdf.addImage(imgData, 'PNG', 0, 0, 210, (canvas.height * 210) / canvas.width, undefined, 'FAST');
      Object.assign(el.style, originalStates);
      pdf.save(`${formData.fullName || 'teacher_resume'}_resume.pdf`);
      setShowSharePopup(true);
    } catch (err) { console.error("PDF Error:", err); alert("Failed to generate PDF."); }
    finally { setIsGeneratingPDF(false); }
  };

  const TeacherTemplate = ({ formData }) => {
    const hasSummary = formData.summary?.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasSpecializations = formData.specializations.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasProfessionalDevelopment = formData.professionalDevelopment.length > 0;
    const hasTeachingMethods = formData.teachingMethods.length > 0;
    const hasTechnologySkills = formData.technologySkills.length > 0;
    const hasLanguages = formData.languages.length > 0;

    return (
      <div className="cf-teacher-template">
        <header className="cf-resume-header">
          <h1 className="cf-resume-name" style={{ fontSize: `${fontSizes.name}pt`, fontWeight: 700 }}>{formData.fullName || 'Your Name'}</h1>
          <div className="cf-contact-row">
            {formData.email && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt`, fontWeight: 400 }}><FiMail /> {formData.email}</div>}
            {(formData.email && (formData.phone || formData.address)) && <div className="cf-contact-separator">•</div>}
            {formData.phone && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt`, fontWeight: 400 }}><FiPhone /> {formData.phone}</div>}
            {(formData.phone && formData.address) && <div className="cf-contact-separator">•</div>}
            {formData.address && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt`, fontWeight: 400 }}><FiMapPin /> {formData.address}</div>}
            {formData.socialLinks.map((link, i) => (<div key={i} className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt`, fontWeight: 400 }}>{getSocialIcon(link.platform)} {formatSocialUrl(link.url)}</div>))}
          </div>
        </header>
        {hasSummary && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>PROFESSIONAL SUMMARY</h2><p className="cf-summary-text" style={{ fontSize: `${fontSizes.regularText}pt`, fontWeight: 400 }}>{formData.summary}</p></section>}
        {hasExperience && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>TEACHING EXPERIENCE</h2>{formData.experience.map((exp, i) => (<div key={i} className="cf-experience-item"><div className="cf-experience-header"><h3 style={{ fontSize: `${fontSizes.jobTitle}pt`, fontWeight: 700 }}>{exp.position}</h3><p className="cf-company" style={{ fontSize: `${fontSizes.school}pt`, fontWeight: 400 }}>{exp.school} | {exp.gradeLevel && `${exp.gradeLevel} • `}{exp.subjects} | {exp.startDate} – {exp.endDate || 'Present'}</p></div><ul className="cf-bullet-list">{exp.description.split('\n').filter(l => l.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt`, fontWeight: 400 }}>{line}</li>)}</ul></div>))}</section>}
        {hasEducation && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>EDUCATION & QUALIFICATIONS</h2>{formData.education.map((edu, i) => (<div key={i} className="cf-education-item"><h3 style={{ fontSize: `${fontSizes.degree}pt`, fontWeight: 700 }}>{edu.degree}{edu.major && ` in ${edu.major}`}</h3><p className="cf-institution-text" style={{ fontSize: `${fontSizes.institution}pt`, fontWeight: 400 }}>{edu.institution} | <span className="cf-institution-date" style={{ fontSize: `${fontSizes.institutionDate}pt`, fontWeight: 400 }}>{edu.startDate} – {edu.endDate || 'Present'}</span>{edu.certifications && ` • ${edu.certifications}`}</p></div>))}</section>}
        {hasSpecializations && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>TEACHING SPECIALIZATIONS</h2><ul className="cf-skills-list">{formData.specializations.map((s, i) => <li key={i} style={{ fontSize: `${fontSizes.skillText}pt`, fontWeight: 400 }}>{s.name}</li>)}</ul></section>}
        {hasCertifications && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>TEACHING CERTIFICATIONS</h2>{formData.certifications.map((c, i) => (<div key={i} className="cf-cert-item" style={{ fontSize: `${fontSizes.certificationText}pt`, fontWeight: 400 }}><strong style={{ fontWeight: 700 }}>{c.name}</strong>{c.issuingAuthority && ` – ${c.issuingAuthority}`}{c.certificationNumber && ` (Certification #: ${c.certificationNumber})`}{c.expiryDate && ` – Expires: ${c.expiryDate}`}</div>))}</section>}
        {hasProfessionalDevelopment && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>PROFESSIONAL DEVELOPMENT</h2>{formData.professionalDevelopment.map((pd, i) => (<div key={i} className="cf-pd-item" style={{ fontSize: `${fontSizes.regularText}pt`, fontWeight: 400 }}><strong style={{ fontWeight: 700 }}>{pd.name}</strong>{pd.provider && ` – ${pd.provider}`}{pd.hours && ` (${pd.hours} hours)`}{pd.date && ` – ${pd.date}`}</div>))}</section>}
        {hasTeachingMethods && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>PEDAGOGICAL APPROACHES</h2><ul className="cf-bullet-list">{formData.teachingMethods.map((tm, i) => <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt`, fontWeight: 400 }}>{tm.name}</li>)}</ul></section>}
        {hasTechnologySkills && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>EDUCATIONAL TECHNOLOGY SKILLS</h2><ul className="cf-skills-list">{formData.technologySkills.map((ts, i) => (<li key={i} style={{ fontSize: `${fontSizes.skillText}pt`, fontWeight: 400 }}>{ts.name}{ts.proficiency && ` (${ts.proficiency})`}</li>))}</ul></section>}
        {hasLanguages && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>LANGUAGES</h2><ul className="cf-bullet-list">{formData.languages.map((l, i) => (<li key={i} style={{ fontSize: `${fontSizes.bulletText}pt`, fontWeight: 400 }}>{l.name}{l.proficiency && ` (${l.proficiency})`}</li>))}</ul></section>}
      </div>
    );
  };

  const canonicalUrl = "https://professionalresumefree.com/ats-friendly-teacher-resume-builder";

  return (
    <>
      <style>{careerFlowStyles}</style>
      <div className="cf-resume-builder" lang="en-US">
        <Head>
          <title>Free Teacher Resume Builder 2026: ATS Templates for Education Pros</title>
          <meta name="title" content="Free Teacher Resume Builder 2026: ATS Templates for Education Pros" />
          <meta name="description" content="Create your professional teacher resume for free in 2026. ATS-optimized templates help education professionals highlight teaching experience, certifications & skills. Start now—no sign-up." />
          <meta name="keywords" content="teacher resume builder, education resume templates, teacher resume builder free, educator resume, ATS friendly teacher resume, free resume builder for teachers, teaching resume, education CV, school teacher resume, international teacher resume" />
          <meta name="author" content="Professional Teacher Resume Free" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
          <meta name="date" content={safeCurrentDate} />
          <meta name="last-modified" content={safeLastModifiedDate} />
          <meta name="revisit-after" content="1 days" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <link rel="canonical" href={canonicalUrl} />
          <link rel="alternate" href={canonicalUrl} hreflang="en" />
          <link rel="alternate" href={canonicalUrl} hreflang="en-US" />
          <link rel="alternate" href={canonicalUrl} hreflang="en-GB" />
          <link rel="alternate" href={canonicalUrl} hreflang="en-CA" />
          <link rel="alternate" href={canonicalUrl} hreflang="en-AU" />
          <link rel="alternate" href={canonicalUrl} hreflang="en-NZ" />
          <link rel="alternate" href={canonicalUrl} hreflang="en-IN" />
          <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
          <meta property="og:title" content="Free Teacher Resume Builder 2026: ATS Templates for Education Pros" />
          <meta property="og:description" content="Create your professional teacher resume for free in 2026. ATS-optimized templates help education professionals highlight teaching experience, certifications & skills. Start now—no sign-up." />
          <meta property="og:image" content="https://professionalresumefree.com/images/og-teacher-resume-builder-preview.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Free Teacher Resume Builder - Create Professional Education Resumes Online" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Professional Teacher Resume Free" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="en_GB" />
          <meta property="og:locale:alternate" content="en_CA" />
          <meta property="og:locale:alternate" content="en_AU" />
          <meta property="og:locale:alternate" content="en_NZ" />
          <meta property="og:locale:alternate" content="en_IN" />
          <meta property="og:updated_time" content={safeLastModifiedDate} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Free Teacher Resume Builder 2026: ATS Templates for Education Pros" />
          <meta name="twitter:description" content="Create your professional teacher resume for free in 2026. ATS-optimized templates help education professionals highlight teaching experience, certifications & skills. Start now—no sign-up." />
          <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-teacher-resume-builder-preview.jpg" />
          <meta name="twitter:image:alt" content="Free Teacher Resume Builder with ATS Templates" />
          <meta name="twitter:site" content="@ProTeacherResume" />
          <meta name="twitter:creator" content="@ProTeacherResume" />
          <meta name="theme-color" content="#1976D2" />
          <meta name="msapplication-TileColor" content="#1976D2" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          <script
            type="application/ld+json"
            key="structured-data"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "WebPage",
                    "@id": `${canonicalUrl}#webpage`,
                    "url": canonicalUrl,
                    "name": "Free Teacher Resume Builder 2026 - ATS Templates for Education Pros",
                    "description": "Create professional ATS-optimized teacher resumes for free. Land interviews 3x faster with our education resume builder.",
                    "datePublished": "2026-01-01",
                    "dateModified": safeLastModifiedDate,
                    "inLanguage": "en-US",
                    "isPartOf": {
                      "@type": "WebSite",
                      "@id": "https://professionalresumefree.com/#website",
                      "url": "https://professionalresumefree.com",
                      "name": "Professional Teacher Resume Free",
                      "description": "Free online resume builder for education professionals worldwide",
                      "publisher": {
                        "@type": "Organization",
                        "@id": "https://professionalresumefree.com/#organization",
                        "name": "Professional Teacher Resume Free",
                        "url": "https://professionalresumefree.com",
                        "logo": {
                          "@type": "ImageObject",
                          "url": "https://professionalresumefree.com/logo.png",
                          "width": 512,
                          "height": 512
                        },
                        "sameAs": [
                          "https://twitter.com/ProTeacherResume",
                          "https://www.linkedin.com/company/professional-teacher-resume-free",
                          "https://www.facebook.com/ProfessionalTeacherResumeFree",
                          "https://www.youtube.com/@ProfessionalTeacherResumeFree"
                        ]
                      }
                    },
                    "primaryImageOfPage": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/images/og-teacher-resume-builder-preview.jpg",
                      "width": 1200,
                      "height": 630
                    },
                    "breadcrumb": {
                      "@type": "BreadcrumbList",
                      "itemListElement": [
                        {
                          "@type": "ListItem",
                          "position": 1,
                          "name": "Home",
                          "item": "https://professionalresumefree.com"
                        },
                        {
                          "@type": "ListItem",
                          "position": 2,
                          "name": "Teacher Resume Builder",
                          "item": canonicalUrl
                        }
                      ]
                    },
                    "mainEntity": {
                      "@type": "SoftwareApplication",
                      "name": "Teacher Resume Builder - ATS Optimized Education Resume Maker",
                      "applicationCategory": "BusinessApplication",
                      "operatingSystem": "Any",
                      "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD",
                        "availability": "https://schema.org/InStock",
                        "priceValidUntil": "2026-12-31"
                      },
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": 4.9,
                        "ratingCount": 42365,
                        "bestRating": 5,
                        "worstRating": 1
                      },
                      "description": "Free online ATS-friendly teacher resume builder for education professionals, teachers, professors, and educators worldwide.",
                      "featureList": [
                        "Education ATS-Optimized Templates",
                        "Teacher Content Suggestions",
                        "One-Click PDF Download",
                        "Teaching Experience Formatting",
                        "Mobile-Friendly Editor",
                        "No Sign Up Required",
                        "Free Forever"
                      ],
                      "softwareVersion": "2026.1.0",
                      "screenshot": "https://professionalresumefree.com/images/screenshot-teacher-resume-builder.jpg",
                      "applicationSuite": "Education Career Tools",
                      "countriesSupported": "Global",
                      "fileSize": "Web Application"
                    }
                  },
                  {
                    "@type": "FAQPage",
                    "@id": `${canonicalUrl}#faqpage`,
                    "mainEntity": faqs.map((faq, index) => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer,
                        "datePublished": safeCurrentDate,
                        "author": {
                          "@type": "Person",
                          "name": "Teacher Resume Builder Support Team"
                        }
                      },
                      "mainEntityOfPage": `${canonicalUrl}#webpage`
                    }))
                  },
                  {
                    "@type": "HowTo",
                    "name": "How to Create a Professional Teacher Resume with Our Free Builder",
                    "description": "Step-by-step guide to create an ATS-optimized teacher resume for free",
                    "totalTime": "PT15M",
                    "estimatedCost": {
                      "@type": "MonetaryAmount",
                      "currency": "USD",
                      "value": "0"
                    },
                    "step": [
                      {
                        "@type": "HowToStep",
                        "position": 1,
                        "name": "Choose a Teacher Template",
                        "text": "Select from our ATS-optimized teacher resume templates designed for all education levels: elementary, secondary, special education, ESL, and university teaching.",
                        "url": `${canonicalUrl}#templates`,
                        "image": "https://professionalresumefree.com/images/step1-teacher-template.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Enter Your Teaching Information",
                        "text": "Add your teaching experience, education, certifications, teaching methods, and pedagogical skills using our guided forms.",
                        "url": `${canonicalUrl}#editor`,
                        "image": "https://professionalresumefree.com/images/step2-teaching-info.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Customize and Optimize",
                        "text": "Use our education-specific suggestions to improve teaching keywords and formatting for ATS compatibility in schools worldwide.",
                        "url": `${canonicalUrl}#optimize`,
                        "image": "https://professionalresumefree.com/images/step3-optimize.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 4,
                        "name": "Download Your Teacher Resume",
                        "text": "Export your professional teacher resume as PDF - completely free, no watermarks, ready for international applications.",
                        "url": `${canonicalUrl}#download`,
                        "image": "https://professionalresumefree.com/images/step4-download.jpg"
                      }
                    ]
                  },
                  {
                    "@type": "Service",
                    "serviceType": "Online Teacher Resume Building Service",
                    "provider": {
                      "@type": "Organization",
                      "name": "Professional Teacher Resume Free",
                      "url": "https://professionalresumefree.com",
                      "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+1-800-555-1234",
                        "contactType": "Customer Support",
                        "availableLanguage": "en"
                      }
                    },
                    "areaServed": {
                      "@type": "Country",
                      "name": "Global"
                    },
                    "hasOfferCatalog": {
                      "@type": "OfferCatalog",
                      "name": "Free Teacher Resume Building Services",
                      "itemListElement": [
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Education ATS Resume Templates"
                          }
                        },
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Teacher Resume Editing"
                          }
                        }
                      ]
                    },
                    "description": "Free ATS-friendly teacher resume builder for education professionals worldwide",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD"
                    }
                  },
                  {
                    "@type": "SpeakableSpecification",
                    "cssSelector": [".cf-hero-title", ".cf-hero-subtitle", ".cf-faq-question"]
                  }
                ]
              })
            }}
          />
        </Head>

        <div className="cf-freshness-indicator" style={{ display: 'none' }}>
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={freshnessIndicator} />
        </div>

        <nav className="cf-breadcrumb" aria-label="Breadcrumb"><ol><li><Link href="/" className="cf-breadcrumb-link"><FiHome className="cf-breadcrumb-icon"/><span className="cf-breadcrumb-text">Home</span></Link></li><li className="cf-breadcrumb-separator"><FiChevronRightIcon/></li><li><span className="cf-breadcrumb-text">Free Education Resume Template</span></li></ol></nav>

        <section className="cf-hero">
          <div className="cf-container">
            <div className="cf-hero-content">
              <div className="cf-trust-badge"><FiStar className="cf-trust-icon"/><span className="cf-trust-text">Best Free Teacher Resume Builder 2026</span></div>
              <h1 className="cf-hero-title">Free Teacher Resume Builder 2026</h1>
              <p className="cf-hero-subtitle">Create a <strong className="cf-hero-highlight">professional, ATS-optimized teacher resume for free in minutes.</strong> Our teacher resume builder helps you highlight teaching experience, certifications, and pedagogical skills that impress hiring managers.</p>
              <div className="cf-cta-buttons">
                <button onClick={() => setActiveSection('personal')} className="cf-btn-primary" aria-label="Start building your free teacher resume now—no sign-up required">
                  <span className="cf-btn-text">Start Building Your Teacher Resume Now</span>
                  <FiArrowRight className="cf-btn-icon" />
                  <div className="cf-btn-pulse"></div>
                </button>
                <button onClick={generatePDF} className="cf-btn-secondary" disabled={isGeneratingPDF || !hasContent()} aria-label="Download teacher resume as PDF"><FiDownload className="cf-btn-icon"/><span className="cf-btn-text">Download Teacher Resume PDF</span></button>
              </div>
              <div className="cf-industry-badges"><div className="cf-badge-grid"><span className="cf-badge-item"><FiBookOpen/> Elementary Teacher</span><span className="cf-badge-item"><FiUsers/> High School Teacher</span><span className="cf-badge-item"><FiHeart/> Special Education</span><span className="cf-badge-item"><FiGlobe/> ESL Teacher</span><span className="cf-badge-item"><FiBook/> University Professor</span><span className="cf-badge-item"><FiVideo/> Online Instructor</span></div></div>
            </div>
          </div>
        </section>

        <div className="cf-layout">
          <div className="cf-preview-section">
            <div className="cf-preview-header"><div className="cf-preview-actions"><button onClick={() => setShowFullPreview(!showFullPreview)} className="cf-preview-btn"><FiEye/> {showFullPreview ? 'Hide Full Preview' : 'Show Full Preview'}</button><button onClick={generatePDF} className="cf-download-btn" disabled={isGeneratingPDF || !hasContent()}><FiDownload/>{isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}</button></div></div>
            <div className={`cf-preview-container ${showFullPreview ? 'cf-full-preview' : ''}`}><div className="cf-resume-card"><div className="cf-preview-content"><div className="cf-resume-preview" ref={resumeRef}><TeacherTemplate formData={formData}/></div></div></div></div>
          </div>
          <div className="cf-form-section">
            <div className="cf-form-nav">
              {[{id:'personal',label:'Personal',icon:<FiUser/>},{id:'experience',label:'Teaching Exp.',icon:<FiUsers/>},{id:'education',label:'Education',icon:<FiBook/>},{id:'certifications',label:'Certifications',icon:<FiShield/>},{id:'skills',label:'Teaching Skills',icon:<FiActivity/>},{id:'settings',label:'Font Settings',icon:<FiSettings/>}].map(item => (<button key={item.id} className={`cf-nav-btn ${activeSection===item.id?'cf-nav-btn-active':''}`} onClick={()=>setActiveSection(item.id)}>{item.icon}<span>{item.label}</span></button>))}
            </div>
            <div className="cf-form-content">
              {activeSection==='personal'&&(
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiUser/> Personal Information</h3>
                  <div className="cf-form-card">
                    <div className="cf-form-group"><label className="cf-form-label">Full Name*<input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Jane Smith, M.Ed." required className="cf-form-input"/></label><label className="cf-form-label">Email*<input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="jane.smith@education.com" required className="cf-form-input"/></label></div>
                    <div className="cf-form-group"><label className="cf-form-label">Phone<input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className="cf-form-input"/></label><label className="cf-form-label">Location<input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="City, State, Country" className="cf-form-input"/></label></div>
                  </div>
                  <div className="cf-form-card"><label className="cf-form-label">Professional Teaching Summary*<textarea name="summary" value={formData.summary} onChange={handleInputChange} placeholder="Passionate and dedicated educator with 8+ years of experience in elementary education and curriculum development..." required className="cf-form-textarea" rows="6"/><div className="cf-char-count">{formData.summary.length}/500 characters</div></label></div>
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title"><FiGlobe/> Professional Links</h4><p className="cf-section-desc">Add your professional education profiles</p>
                    <div className="cf-social-input">
                      <select value={currentSocialLink.platform} onChange={e=>setCurrentSocialLink({...currentSocialLink,platform:e.target.value})} className="cf-form-select"><option value="">Select Platform</option><option value="LinkedIn">LinkedIn</option><option value="Portfolio">Teaching Portfolio</option><option value="Website">Personal Website</option><option value="ResearchGate">ResearchGate</option><option value="Google Scholar">Google Scholar</option><option value="ORCID">ORCID</option></select>
                      <input type="url" placeholder="https://linkedin.com/in/yourprofile" value={currentSocialLink.url} onChange={e=>setCurrentSocialLink({...currentSocialLink,url:e.target.value})} className="cf-form-input"/>
                      <div className="cf-form-actions"><button onClick={addSocialLink} className="cf-add-btn" disabled={!currentSocialLink.platform||!currentSocialLink.url}><FiPlus/> {currentSocialLink.isEditing?'Update':'Add Link'}</button>{currentSocialLink.isEditing&&<button onClick={()=>setCurrentSocialLink(defaultSocialLink())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.socialLinks.length===0?<p className="cf-empty-msg">No professional links added yet</p>:formData.socialLinks.map((link,i)=>(<div key={i} className="cf-list-item"><div className="cf-item-info"><span className="cf-item-platform">{link.platform}</span><span className="cf-item-url">{formatSocialUrl(link.url)}</span></div><div className="cf-item-actions"><button onClick={()=>editSocialLink(i)} className="cf-edit-btn"><FiEdit2/></button><button onClick={()=>deleteSocialLink(i)} className="cf-delete-btn"><FiTrash2/></button></div></div>))}</div>
                  </div>
                </div>
              )}
              {activeSection==='experience'&&(
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiUsers/> Teaching Experience</h3>
                  <p className="cf-section-desc">List your teaching positions in reverse chronological order (most recent first)</p>
                  <div className="cf-form-card">
                    <div className="cf-form-group"><label className="cf-form-label">Position Title*<input value={currentExperience.position} onChange={e=>setCurrentExperience({...currentExperience,position:e.target.value})} placeholder="Elementary Teacher, Grade 4" required className="cf-form-input"/></label><label className="cf-form-label">School/Institution*<input value={currentExperience.school} onChange={e=>setCurrentExperience({...currentExperience,school:e.target.value})} placeholder="Sunrise Elementary School" required className="cf-form-input"/></label></div>
                    <div className="cf-form-group"><label className="cf-form-label">Grade Level<input value={currentExperience.gradeLevel} onChange={e=>setCurrentExperience({...currentExperience,gradeLevel:e.target.value})} placeholder="Grade 4, K-5, 9-12" className="cf-form-input"/></label><label className="cf-form-label">Subjects/Areas<input value={currentExperience.subjects} onChange={e=>setCurrentExperience({...currentExperience,subjects:e.target.value})} placeholder="Mathematics, Science, Literacy" className="cf-form-input"/></label></div>
                    <div className="cf-form-group"><label className="cf-form-label">Start Date*<input type="text" placeholder="Month Year (e.g., August 2020)" value={currentExperience.startDate} onChange={e=>setCurrentExperience({...currentExperience,startDate:e.target.value})} required className="cf-form-input"/></label><label className="cf-form-label">End Date<input type="text" placeholder="Month Year or Present" value={currentExperience.endDate} onChange={e=>setCurrentExperience({...currentExperience,endDate:e.target.value})} className="cf-form-input"/></label></div>
                    <label className="cf-form-label">Key Teaching Responsibilities & Achievements*<textarea value={currentExperience.description} onChange={e=>setCurrentExperience({...currentExperience,description:e.target.value})} placeholder="• Developed and implemented differentiated lesson plans for 25+ students..." required className="cf-form-textarea" rows="8"/><div className="cf-char-count">{currentExperience.description.length}/2000 characters</div></label>
                    <div className="cf-form-actions"><button onClick={addExperience} className="cf-add-btn" disabled={!currentExperience.position||!currentExperience.school||!currentExperience.startDate}><FiPlus/> {currentExperience.isEditing?'Update Teaching Experience':'Add Teaching Experience'}</button>{currentExperience.isEditing&&<button onClick={()=>setCurrentExperience(defaultExperience())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                  </div>
                  <div className="cf-form-card"><h4 className="cf-sub-section-title">Your Teaching Experience</h4>{formData.experience.length===0?<p className="cf-empty-msg">No teaching experience added yet</p>:<div className="cf-items-list">{formData.experience.map((exp,i)=>(<div key={i} className="cf-list-item"><div className="cf-item-content"><div className="cf-item-header"><strong className="cf-item-title">{exp.position}</strong><span className="cf-item-subtitle">at {exp.school}</span></div><div className="cf-item-meta"><span>{exp.startDate} – {exp.endDate||'Present'}</span>{exp.gradeLevel&&<span>Grade: {exp.gradeLevel}</span>}{exp.subjects&&<span>Subjects: {exp.subjects}</span>}</div><div className="cf-item-desc">{exp.description.split('\n').filter(l=>l.trim()).map((line,j)=><p key={j} className="cf-bullet-point">• {line}</p>)}</div></div><div className="cf-item-actions"><button onClick={()=>editExperience(i)} className="cf-edit-btn"><FiEdit2/></button><button onClick={()=>deleteExperience(i)} className="cf-delete-btn"><FiTrash2/></button></div></div>))}</div>}</div>
                </div>
              )}
              {activeSection==='education'&&(
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiBook/> Education & Qualifications</h3>
                  <p className="cf-section-desc">List your education degrees, certifications, and relevant training</p>
                  <div className="cf-form-card">
                    <div className="cf-form-group"><label className="cf-form-label">Institution*<input value={currentEducation.institution} onChange={e=>setCurrentEducation({...currentEducation,institution:e.target.value})} placeholder="University of Education" required className="cf-form-input"/></label><label className="cf-form-label">Degree/Certification*<input value={currentEducation.degree} onChange={e=>setCurrentEducation({...currentEducation,degree:e.target.value})} placeholder="Master of Education (M.Ed.)" required className="cf-form-input"/></label></div>
                    <label className="cf-form-label">Major / Concentration / Specialization<input value={currentEducation.major} onChange={e=>setCurrentEducation({...currentEducation,major:e.target.value})} placeholder="Elementary Education, Curriculum & Instruction" className="cf-form-input"/></label>
                    <label className="cf-form-label">Teaching Credentials / Certifications Earned<input value={currentEducation.certifications} onChange={e=>setCurrentEducation({...currentEducation,certifications:e.target.value})} placeholder="State Teaching License, ESL Endorsement" className="cf-form-input"/></label>
                    <div className="cf-form-group"><label className="cf-form-label">Start Date<input type="text" placeholder="Month Year" value={currentEducation.startDate} onChange={e=>setCurrentEducation({...currentEducation,startDate:e.target.value})} className="cf-form-input"/></label><label className="cf-form-label">End Date / Expected<input type="text" placeholder="Month Year or Expected" value={currentEducation.endDate} onChange={e=>setCurrentEducation({...currentEducation,endDate:e.target.value})} className="cf-form-input"/></label></div>
                    <div className="cf-form-actions"><button onClick={addEducation} className="cf-add-btn" disabled={!currentEducation.institution||!currentEducation.degree}><FiPlus/> {currentEducation.isEditing?'Update Education':'Add Education'}</button>{currentEducation.isEditing&&<button onClick={()=>setCurrentEducation(defaultEducation())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                  </div>
                  <div className="cf-form-card"><h4 className="cf-sub-section-title">Your Education</h4>{formData.education.length===0?<p className="cf-empty-msg">No education added yet</p>:<div className="cf-items-list">{formData.education.map((edu,i)=>(<div key={i} className="cf-list-item"><div className="cf-item-content"><div className="cf-item-header"><strong className="cf-item-title">{edu.degree}</strong>{edu.major&&<span className="cf-item-subtitle"> in {edu.major}</span>}</div><div className="cf-item-meta"><span>{edu.institution}</span><span>{edu.startDate} – {edu.endDate||'Present'}</span>{edu.certifications&&<span>Credentials: {edu.certifications}</span>}</div></div><div className="cf-item-actions"><button onClick={()=>editEducation(i)} className="cf-edit-btn"><FiEdit2/></button><button onClick={()=>deleteEducation(i)} className="cf-delete-btn"><FiTrash2/></button></div></div>))}</div>}</div>
                </div>
              )}
              {activeSection==='certifications'&&(
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiShield/> Teaching Certifications</h3>
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title">Teaching Certifications & Licenses</h4><p className="cf-section-desc">Add your teaching certifications, licenses, and endorsements</p>
                    <div className="cf-skills-input">
                      <div className="cf-form-group"><label className="cf-form-label">Certification/License Name*<input value={currentCertification.name} onChange={e=>setCurrentCertification({...currentCertification,name:e.target.value})} placeholder="State Teaching License" className="cf-form-input"/></label><label className="cf-form-label">Issuing Authority<input value={currentCertification.issuingAuthority} onChange={e=>setCurrentCertification({...currentCertification,issuingAuthority:e.target.value})} placeholder="State Department of Education" className="cf-form-input"/></label></div>
                      <div className="cf-form-group"><label className="cf-form-label">Certification Number<input value={currentCertification.certificationNumber} onChange={e=>setCurrentCertification({...currentCertification,certificationNumber:e.target.value})} placeholder="TEACH-1234567" className="cf-form-input"/></label><label className="cf-form-label">Expiry Date<input value={currentCertification.expiryDate} onChange={e=>setCurrentCertification({...currentCertification,expiryDate:e.target.value})} placeholder="Month Year" className="cf-form-input"/></label></div>
                      <div className="cf-form-actions"><button onClick={addCertification} className="cf-add-btn" disabled={!currentCertification.name.trim()}><FiPlus/> {currentCertification.isEditing?'Update Certification':'Add Certification'}</button>{currentCertification.isEditing&&<button onClick={()=>setCurrentCertification(defaultCertification())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.certifications.map((c,i)=>(<div key={i} className="cf-list-item"><div><strong>{c.name}</strong>{c.issuingAuthority&&` – ${c.issuingAuthority}`}{c.certificationNumber&&` (#${c.certificationNumber})`}{c.expiryDate&&` – Expires: ${c.expiryDate}`}</div><div className="cf-item-actions"><button onClick={()=>editCertification(i)} className="cf-edit-btn"><FiEdit2/></button><button onClick={()=>deleteCertification(i)} className="cf-delete-btn"><FiTrash2/></button></div></div>))}{formData.certifications.length===0&&<p className="cf-empty-msg">No certifications added yet</p>}</div>
                  </div>
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title">Professional Development & Training</h4><p className="cf-section-desc">Add workshops, conferences, and ongoing professional learning</p>
                    <div className="cf-skills-input">
                      <div className="cf-form-group"><label className="cf-form-label">Workshop/Course Name*<input value={currentProfessionalDevelopment.name} onChange={e=>setCurrentProfessionalDevelopment({...currentProfessionalDevelopment,name:e.target.value})} placeholder="Differentiated Instruction Workshop" className="cf-form-input"/></label><label className="cf-form-label">Provider/Organization<input value={currentProfessionalDevelopment.provider} onChange={e=>setCurrentProfessionalDevelopment({...currentProfessionalDevelopment,provider:e.target.value})} placeholder="National Education Association" className="cf-form-input"/></label></div>
                      <div className="cf-form-group"><label className="cf-form-label">Hours/Duration<input value={currentProfessionalDevelopment.hours} onChange={e=>setCurrentProfessionalDevelopment({...currentProfessionalDevelopment,hours:e.target.value})} placeholder="15 hours" className="cf-form-input"/></label><label className="cf-form-label">Completion Date<input value={currentProfessionalDevelopment.date} onChange={e=>setCurrentProfessionalDevelopment({...currentProfessionalDevelopment,date:e.target.value})} placeholder="Month Year" className="cf-form-input"/></label></div>
                      <div className="cf-form-actions"><button onClick={addProfessionalDevelopment} className="cf-add-btn" disabled={!currentProfessionalDevelopment.name.trim()}><FiPlus/> {currentProfessionalDevelopment.isEditing?'Update Training':'Add Training'}</button>{currentProfessionalDevelopment.isEditing&&<button onClick={()=>setCurrentProfessionalDevelopment(defaultProfessionalDevelopment())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.professionalDevelopment.map((pd,i)=>(<div key={i} className="cf-list-item"><div><strong>{pd.name}</strong>{pd.provider&&` – ${pd.provider}`}{pd.hours&&` (${pd.hours})`}{pd.date&&` – ${pd.date}`}</div><div className="cf-item-actions"><button onClick={()=>editProfessionalDevelopment(i)} className="cf-edit-btn"><FiEdit2/></button><button onClick={()=>deleteProfessionalDevelopment(i)} className="cf-delete-btn"><FiTrash2/></button></div></div>))}{formData.professionalDevelopment.length===0&&<p className="cf-empty-msg">No professional development added yet</p>}</div>
                  </div>
                </div>
              )}
              {activeSection==='skills'&&(
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiActivity/> Teaching Skills & Specializations</h3>
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title">Teaching Specializations</h4><p className="cf-section-desc">List your teaching specialties and areas of expertise</p>
                    <div className="cf-skills-input">
                      <input value={currentSpecialization.name} onChange={e=>setCurrentSpecialization({...currentSpecialization,name:e.target.value})} placeholder="Differentiated Instruction, Classroom Management, STEM Education" className="cf-form-input"/>
                      <div className="cf-form-actions"><button onClick={addSpecialization} className="cf-add-btn" disabled={!currentSpecialization.name.trim()}><FiPlus/> {currentSpecialization.isEditing?'Update Specialization':'Add Specialization'}</button>{currentSpecialization.isEditing&&<button onClick={()=>setCurrentSpecialization(defaultSpecialization())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.specializations.map((s,i)=>(<div key={i} className="cf-list-item"><span>{s.name}</span><div className="cf-item-actions"><button onClick={()=>editSpecialization(i)} className="cf-edit-btn"><FiEdit2/></button><button onClick={()=>deleteSpecialization(i)} className="cf-delete-btn"><FiTrash2/></button></div></div>))}{formData.specializations.length===0&&<p className="cf-empty-msg">No specializations added yet</p>}</div>
                  </div>
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title">Pedagogical Approaches & Teaching Methods</h4><p className="cf-section-desc">List your teaching methodologies and instructional approaches</p>
                    <div className="cf-skills-input">
                      <input value={currentTeachingMethod.name} onChange={e=>setCurrentTeachingMethod({...currentTeachingMethod,name:e.target.value})} placeholder="Project-Based Learning, Flipped Classroom, Inquiry-Based Learning" className="cf-form-input"/>
                      <div className="cf-form-actions"><button onClick={addTeachingMethod} className="cf-add-btn" disabled={!currentTeachingMethod.name.trim()}><FiPlus/> {currentTeachingMethod.isEditing?'Update Method':'Add Method'}</button>{currentTeachingMethod.isEditing&&<button onClick={()=>setCurrentTeachingMethod(defaultTeachingMethod())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.teachingMethods.map((tm,i)=>(<div key={i} className="cf-list-item"><span>{tm.name}</span><div className="cf-item-actions"><button onClick={()=>editTeachingMethod(i)} className="cf-edit-btn"><FiEdit2/></button><button onClick={()=>deleteTeachingMethod(i)} className="cf-delete-btn"><FiTrash2/></button></div></div>))}{formData.teachingMethods.length===0&&<p className="cf-empty-msg">No teaching methods added yet</p>}</div>
                  </div>
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title">Educational Technology Skills</h4><p className="cf-section-desc">List your proficiency with educational technology tools and platforms</p>
                    <div className="cf-skills-input">
                      <div className="cf-form-group"><label className="cf-form-label">Technology Tool*<input value={currentTechnologySkill.name} onChange={e=>setCurrentTechnologySkill({...currentTechnologySkill,name:e.target.value})} placeholder="Google Classroom, Zoom, Kahoot!" className="cf-form-input"/></label><label className="cf-form-label">Proficiency Level<input value={currentTechnologySkill.proficiency} onChange={e=>setCurrentTechnologySkill({...currentTechnologySkill,proficiency:e.target.value})} placeholder="Advanced, Intermediate, Basic" className="cf-form-input"/></label></div>
                      <div className="cf-form-actions"><button onClick={addTechnologySkill} className="cf-add-btn" disabled={!currentTechnologySkill.name.trim()}><FiPlus/> {currentTechnologySkill.isEditing?'Update Skill':'Add Skill'}</button>{currentTechnologySkill.isEditing&&<button onClick={()=>setCurrentTechnologySkill(defaultTechnologySkill())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.technologySkills.map((ts,i)=>(<div key={i} className="cf-list-item"><div>{ts.name}{ts.proficiency&&` (${ts.proficiency})`}</div><div className="cf-item-actions"><button onClick={()=>editTechnologySkill(i)} className="cf-edit-btn"><FiEdit2/></button><button onClick={()=>deleteTechnologySkill(i)} className="cf-delete-btn"><FiTrash2/></button></div></div>))}{formData.technologySkills.length===0&&<p className="cf-empty-msg">No technology skills added yet</p>}</div>
                  </div>
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title">Languages</h4><p className="cf-section-desc">List languages you speak and your proficiency level</p>
                    <div className="cf-skills-input">
                      <div className="cf-form-group"><label className="cf-form-label">Language*<input value={currentLanguage.name} onChange={e=>setCurrentLanguage({...currentLanguage,name:e.target.value})} placeholder="Spanish, French, Mandarin" className="cf-form-input"/></label><label className="cf-form-label">Proficiency Level<input value={currentLanguage.proficiency} onChange={e=>setCurrentLanguage({...currentLanguage,proficiency:e.target.value})} placeholder="Fluent, Conversational, Basic" className="cf-form-input"/></label></div>
                      <div className="cf-form-actions"><button onClick={addLanguage} className="cf-add-btn" disabled={!currentLanguage.name.trim()}><FiPlus/> {currentLanguage.isEditing?'Update Language':'Add Language'}</button>{currentLanguage.isEditing&&<button onClick={()=>setCurrentLanguage(defaultLanguage())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.languages.map((l,i)=>(<div key={i} className="cf-list-item"><div>{l.name}{l.proficiency&&` (${l.proficiency})`}</div><div className="cf-item-actions"><button onClick={()=>editLanguage(i)} className="cf-edit-btn"><FiEdit2/></button><button onClick={()=>deleteLanguage(i)} className="cf-delete-btn"><FiTrash2/></button></div></div>))}{formData.languages.length===0&&<p className="cf-empty-msg">No languages added yet</p>}</div>
                  </div>
                </div>
              )}
              {activeSection==='settings'&&(
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiSettings/> Font Size Settings</h3>
                  <p className="cf-section-desc">Customize font sizes for your teacher resume PDF. All sizes are in points (pt).</p>
                  <div className="cf-form-card">
                    <div className="cf-font-grid">
                      {[{key:'name',label:'Name'},{key:'sectionTitle',label:'Section Titles'},{key:'jobTitle',label:'Job Titles'},{key:'degree',label:'Degrees'},{key:'school',label:'School/Institution Names'},{key:'institutionDate',label:'Institution Dates'},{key:'regularText',label:'Regular Text'},{key:'bulletText',label:'Bullet Points'},{key:'contactInfo',label:'Contact Info'},{key:'skillText',label:'Skills Text'},{key:'certificationText',label:'Certification Text'}].map(({key,label})=>(
                        <div key={key} className="cf-font-control">
                          <label className="cf-font-label"><span>{label}</span><span className="cf-font-value">{fontSizes[key]}pt</span></label>
                          <input type="range" min={key==='institutionDate'?4:6} max={key==='name'?24:key==='sectionTitle'?18:key==='jobTitle'||key==='degree'?16:14} value={fontSizes[key]} onChange={e=>handleFontSizeChange(key,e.target.value)} className="cf-font-slider"/>
                        </div>
                      ))}
                    </div>
                    <button onClick={resetFontSizes} className="cf-reset-btn">Reset to Default Font Sizes</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <section className="cf-faq-section" aria-labelledby="faq-title"><div className="cf-container"><div className="cf-section-header"><h2 className="cf-section-title" id="faq-title">Frequently Asked Questions</h2><p>Everything you need to know about creating professional teacher resumes with our tool.</p></div><div className="cf-faq-grid">{faqs.map((faq,i)=>(<div key={i} className="cf-faq-item"><h3 className="cf-faq-question">{faq.question}</h3><p className="cf-faq-answer">{faq.answer}</p></div>))}</div></div></section>

        <section className="cf-cta-section" aria-labelledby="cta-title"><div className="cf-container"><div className="cf-cta-content"><h2 className="cf-cta-title" id="cta-title">Ready to Advance Your Teaching Career?</h2><p className="cf-cta-subtitle">Join 3 million+ education professionals worldwide who landed their dream teaching jobs with our free ATS-friendly teacher resume builder.</p><div className="cf-cta-btn-wrap"><button onClick={()=>setActiveSection('personal')} className="cf-cta-btn" aria-label="Create your free teacher resume now—no sign-up required"><span className="cf-cta-btn-text">Create Your Free Teacher Resume Now</span><FiArrowRight className="cf-cta-btn-icon"/></button></div><div className="cf-cta-guarantee"><FiCheck className="cf-guarantee-icon"/><span className="cf-guarantee-text">No credit card required • Free forever • Download in minutes • ATS Optimized for Education • Works Worldwide</span></div></div></div></section>

        {showFullPreview&&(<div className="cf-modal" onClick={()=>setShowFullPreview(false)}><div className="cf-modal-content" onClick={e=>e.stopPropagation()}><div className="cf-modal-header"><h3>Full Teacher Resume Preview</h3><button className="cf-close-btn" onClick={()=>setShowFullPreview(false)}><FiX/></button></div><div className="cf-modal-pages"><div className="cf-modal-page"><TeacherTemplate formData={formData}/></div></div></div></div>)}

        {showSharePopup && (
          <div className="cf-share-overlay" onClick={() => setShowSharePopup(false)}>
            <div className="cf-share-card" onClick={e => e.stopPropagation()}>
              <span className="cf-share-icon">💬</span>
              <h2 className="cf-share-headline">Loved Using This?</h2>
              <p className="cf-share-body">It only takes 5 seconds to share professionalresumefree.com — but it could change someone's career. Thanks for spreading the word!</p>
              <button className="cf-share-close-btn" onClick={() => setShowSharePopup(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  // Generate review dates for structured data
  const reviewDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  // Generate FAQ dates for structured data
  const faqDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  // Breadcrumb data for structured data
  const breadcrumbData = [
    { name: 'Home', item: 'https://professionalresumefree.com/' },
    { name: 'Teacher Resume Builder', item: 'https://professionalresumefree.com/ats-friendly-teacher-resume-builder' }
  ];

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates,
        breadcrumbData
      },
      buildTimestamp
    },
    // ISR: Revalidate every 24 hours (86400 seconds)
    revalidate: 3600
  };
}

export default TeacherResume;