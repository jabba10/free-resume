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
  FiFlag,
  FiBookOpen,
  FiDollarSign,
  FiCalendar,
  FiMap,
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
  .cf-gov-template { color: #000000; line-height: 1.25; height: 100%; }
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
  .cf-cert-item, .cf-project-item, .cf-affiliation-item, .cf-pub-item { margin-bottom: 3pt; line-height: 1.25; }

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
  .cf-modal-page .cf-gov-template { width: 100%; height: 100%; padding: 10mm 15mm; box-sizing: border-box; overflow-y: auto; }

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
    .cf-modal-page .cf-gov-template { padding: 8mm 12mm; }
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
    .cf-modal-page .cf-gov-template { padding: 6mm 8mm; }
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
    .cf-gov-template, .cf-section { page-break-inside: avoid; }
  }
`;

const GovernmentResume = ({ seoData, buildTimestamp }) => {
  const {
    currentDate,
    lastModifiedDate,
    reviewDates,
    faqDates,
    breadcrumbData
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeReviewDates = reviewDates || Array(6).fill(freshnessIndicator);
  const safeFaqDates = faqDates || Array(6).fill(freshnessIndicator);

  const defaultExperience = () => ({ organization: '', position: '', department: '', location: '', startDate: '', endDate: '', description: '', isEditing: false, editIndex: null });
  const defaultEducation = () => ({ institution: '', degree: '', major: '', location: '', startDate: '', endDate: '', honors: '', isEditing: false, editIndex: null });
  const defaultSkill = () => ({ name: '', category: 'Policy', isEditing: false, editIndex: null });
  const defaultCertification = () => ({ name: '', issuingAuthority: '', certificationNumber: '', expiryDate: '', isEditing: false, editIndex: null });
  const defaultProject = () => ({ title: '', organization: '', role: '', startDate: '', endDate: '', description: '', funding: '', isEditing: false, editIndex: null });
  const defaultAffiliation = () => ({ organization: '', role: '', years: '', isEditing: false, editIndex: null });
  const defaultLanguage = () => ({ name: '', proficiency: '', isEditing: false, editIndex: null });
  const defaultSocialLink = () => ({ platform: '', url: '', isEditing: false, editIndex: null });
  const defaultPublication = () => ({ title: '', publisher: '', date: '', url: '', isEditing: false, editIndex: null });

  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', address: '', summary: '', experience: [], education: [], skills: [], certifications: [], projects: [], affiliations: [], languages: [], socialLinks: [], publications: [], clearance: '' });
  const [fontSizes, setFontSizes] = useState({ name: 12, sectionTitle: 9, contactInfo: 7, jobTitle: 9, organization: 8, degree: 9, institution: 7, institutionDate: 6, regularText: 8, bulletText: 8, skillText: 7, certificationText: 8, clearanceText: 9 });
  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentSkill, setCurrentSkill] = useState(defaultSkill());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentProject, setCurrentProject] = useState(defaultProject());
  const [currentAffiliation, setCurrentAffiliation] = useState(defaultAffiliation());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());
  const [currentPublication, setCurrentPublication] = useState(defaultPublication());
  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);

  // Testimonials for Structured Data - Government/Non-profit focused
  const testimonials = [
    {
      quote: "As a federal government job seeker, this resume builder helped me create an SF-171 ready resume that passed USAJobs screening on the first try.",
      metric: "Federal Job in 3 Months",
      name: "Michael R.",
      role: "Policy Analyst",
      company: "U.S. Department of State"
    },
    {
      quote: "The non-profit specific templates and terminology helped me transition from corporate to the non-profit sector seamlessly.",
      metric: "Non-profit Director Role",
      name: "Sarah L.",
      role: "Program Director",
      company: "International Rescue Committee"
    },
    {
      quote: "Creating a government resume that highlights my public service experience was effortless. The GS-grade formatting is perfect.",
      metric: "GS-13 Position Secured",
      name: "James K.",
      role: "Budget Analyst",
      company: "Department of Defense"
    },
    {
      quote: "The grant writing and project management sections were exactly what I needed for my non-profit applications.",
      metric: "85% Interview Rate",
      name: "Maria G.",
      role: "Grant Writer",
      company: "World Wildlife Fund"
    },
    {
      quote: "Finally a resume builder that understands the unique requirements of government applications, including security clearance formatting.",
      metric: "Security Clearance Process",
      name: "David T.",
      role: "Intelligence Analyst",
      company: "Department of Homeland Security"
    },
    {
      quote: "The NGO-specific language and impact measurement sections helped me stand out in a competitive international development field.",
      metric: "UN Agency Position",
      name: "Lisa R.",
      role: "Monitoring & Evaluation Specialist",
      company: "United Nations Development Programme"
    }
  ];

  // FAQ Data for Structured Data
  const faqs = [
    {
      question: "Is this government resume builder free and suitable for USAJobs applications?",
      answer: "Yes, our government resume builder is completely free and optimized for USAJobs and federal application systems. We include government-specific formatting, GS-grade templates, and SF-171 compatible structures."
    },
    {
      question: "What makes a government resume different from a corporate resume?",
      answer: "Government resumes require more detail, specific formatting for federal systems like USAJobs, emphasis on public service, security clearance information, and compliance with government application requirements. Our builder addresses all these unique needs."
    },
    {
      question: "Can I use this for non-profit and NGO job applications?",
      answer: "Absolutely! We include specialized sections for non-profit work including grant management, donor relations, program development, and impact measurement that are essential for NGO applications."
    },
    {
      question: "How do I format security clearance information on my resume?",
      answer: "Our builder includes dedicated security clearance sections with proper government formatting. We guide you through listing clearance levels, investigation dates, and adjudicating agencies correctly."
    },
    {
      question: "Does this builder include international development and UN agency templates?",
      answer: "Yes, we offer specialized templates for international organizations including UN agencies, World Bank, and international NGOs with appropriate terminology and formatting."
    },
    {
      question: "Can I highlight public service and volunteer experience appropriately?",
      answer: "Our builder includes dedicated sections for public service, volunteer work, and community engagement with government-preferred formatting and emphasis on civic contributions."
    }
  ];

  const handleFontSizeChange = (key, value) => setFontSizes(prev => ({ ...prev, [key]: Math.max(4, Math.min(24, parseInt(value) || prev[key])) }));
  const resetFontSizes = () => setFontSizes({ name: 12, sectionTitle: 9, contactInfo: 7, jobTitle: 9, organization: 8, degree: 9, institution: 7, institutionDate: 6, regularText: 8, bulletText: 8, skillText: 7, certificationText: 8, clearanceText: 9 });
  const getSocialIcon = () => <FiGlobe />;
  const formatSocialUrl = (url) => url ? url.replace(/(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '') : '';
  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const hasContent = () => formData.fullName || formData.email || formData.summary || formData.socialLinks.length > 0 || formData.experience.length > 0 || formData.education.length > 0 || formData.skills.length > 0 || formData.certifications.length > 0 || formData.projects.length > 0 || formData.affiliations.length > 0 || formData.languages.length > 0 || formData.publications.length > 0 || formData.clearance;

  const createAddFunction = (key, current, setter, defaultFunc, isValid) => () => {
    if (!isValid()) return;
    const item = { ...current };
    if (item.isEditing) { const updated = [...formData[key]]; updated[item.editIndex] = { ...item, isEditing: false, editIndex: null }; setFormData({ ...formData, [key]: updated }); }
    else { setFormData({ ...formData, [key]: [...formData[key], { ...item, isEditing: false, editIndex: null }] }); }
    setter(defaultFunc());
  };
  const createEditFunction = (key, setter) => (index) => setter({ ...formData[key][index], isEditing: true, editIndex: index });
  const createDeleteFunction = (key) => (index) => { const updated = [...formData[key]]; updated.splice(index, 1); setFormData({ ...formData, [key]: updated }); };

  const addExperience = createAddFunction('experience', currentExperience, setCurrentExperience, defaultExperience, () => currentExperience.position && currentExperience.organization && currentExperience.startDate);
  const editExperience = createEditFunction('experience', setCurrentExperience);
  const deleteExperience = createDeleteFunction('experience');
  const addEducation = createAddFunction('education', currentEducation, setCurrentEducation, defaultEducation, () => currentEducation.institution && currentEducation.degree);
  const editEducation = createEditFunction('education', setCurrentEducation);
  const deleteEducation = createDeleteFunction('education');
  const addSkill = createAddFunction('skills', currentSkill, setCurrentSkill, defaultSkill, () => currentSkill.name.trim());
  const editSkill = createEditFunction('skills', setCurrentSkill);
  const deleteSkill = createDeleteFunction('skills');
  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, () => currentCertification.name.trim());
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');
  const addProject = createAddFunction('projects', currentProject, setCurrentProject, defaultProject, () => currentProject.title && currentProject.organization);
  const editProject = createEditFunction('projects', setCurrentProject);
  const deleteProject = createDeleteFunction('projects');
  const addAffiliation = createAddFunction('affiliations', currentAffiliation, setCurrentAffiliation, defaultAffiliation, () => currentAffiliation.organization.trim());
  const editAffiliation = createEditFunction('affiliations', setCurrentAffiliation);
  const deleteAffiliation = createDeleteFunction('affiliations');
  const addLanguage = createAddFunction('languages', currentLanguage, setCurrentLanguage, defaultLanguage, () => currentLanguage.name.trim());
  const editLanguage = createEditFunction('languages', setCurrentLanguage);
  const deleteLanguage = createDeleteFunction('languages');
  const addPublication = createAddFunction('publications', currentPublication, setCurrentPublication, defaultPublication, () => currentPublication.title.trim());
  const editPublication = createEditFunction('publications', setCurrentPublication);
  const deletePublication = createDeleteFunction('publications');
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
      pdf.save(`${formData.fullName || 'government_resume'}_resume.pdf`);
      setShowSharePopup(true);
    } catch (err) { console.error("PDF Error:", err); alert("Failed to generate PDF."); }
    finally { setIsGeneratingPDF(false); }
  };

  const GovernmentTemplate = ({ formData }) => {
    const hasSummary = formData.summary?.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasSkills = formData.skills.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasProjects = formData.projects.length > 0;
    const hasAffiliations = formData.affiliations.length > 0;
    const hasLanguages = formData.languages.length > 0;
    const hasPublications = formData.publications.length > 0;
    const hasClearance = formData.clearance?.trim().length > 0;

    return (
      <div className="cf-gov-template">
        <header className="cf-resume-header">
          <h1 className="cf-resume-name" style={{ fontSize: `${fontSizes.name}pt`, fontWeight: 700 }}>{formData.fullName || 'Your Name'}</h1>
          <div className="cf-contact-row">
            {formData.email && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt`, fontWeight: 400 }}><FiMail /> {formData.email}</div>}
            {(formData.email && (formData.phone || formData.address)) && <div className="cf-contact-separator">|</div>}
            {formData.phone && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt`, fontWeight: 400 }}><FiPhone /> {formData.phone}</div>}
            {(formData.phone && formData.address) && <div className="cf-contact-separator">|</div>}
            {formData.address && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt`, fontWeight: 400 }}><FiMapPin /> {formData.address}</div>}
            {formData.socialLinks.map((link, i) => (<div key={i} className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt`, fontWeight: 400 }}>{getSocialIcon(link.platform)} {formatSocialUrl(link.url)}</div>))}
          </div>
        </header>
        {hasClearance && <section className="cf-section"><div style={{ fontSize: `${fontSizes.clearanceText}pt`, fontWeight: 700 }}><strong>Security Clearance:</strong> {formData.clearance}</div></section>}
        {hasSummary && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>PROFESSIONAL PROFILE</h2><p className="cf-summary-text" style={{ fontSize: `${fontSizes.regularText}pt`, fontWeight: 400 }}>{formData.summary}</p></section>}
        {hasExperience && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>PROFESSIONAL EXPERIENCE</h2>{formData.experience.map((exp, i) => (<div key={i} className="cf-experience-item"><div className="cf-experience-header"><h3 style={{ fontSize: `${fontSizes.jobTitle}pt`, fontWeight: 700 }}>{exp.position}</h3><p className="cf-company" style={{ fontSize: `${fontSizes.organization}pt`, fontWeight: 400 }}>{exp.organization}{exp.department && ` • ${exp.department}`} | {exp.location} | {exp.startDate} – {exp.endDate || 'Present'}</p></div><ul className="cf-bullet-list">{exp.description.split('\n').filter(l => l.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt`, fontWeight: 400 }}>{line}</li>)}</ul></div>))}</section>}
        {hasEducation && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>EDUCATION</h2>{formData.education.map((edu, i) => (<div key={i} className="cf-education-item"><h3 style={{ fontSize: `${fontSizes.degree}pt`, fontWeight: 700 }}>{edu.degree}{edu.major && ` in ${edu.major}`}</h3><p className="cf-institution-text" style={{ fontSize: `${fontSizes.institution}pt`, fontWeight: 400 }}>{edu.institution} | {edu.location} | <span className="cf-institution-date" style={{ fontSize: `${fontSizes.institutionDate}pt`, fontWeight: 400 }}>{edu.startDate} – {edu.endDate || 'Present'}</span></p>{edu.honors && <p style={{ fontSize: `${fontSizes.regularText}pt`, fontWeight: 400 }}><em>{edu.honors}</em></p>}</div>))}</section>}
        {hasSkills && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>CORE COMPETENCIES</h2>{['Policy', 'Management', 'Technical', 'Analytical'].map(category => { const categorySkills = formData.skills.filter(s => s.category === category); if (categorySkills.length === 0) return null; return (<div key={category} style={{ marginBottom: '4pt' }}><h4 style={{ fontSize: `${fontSizes.sectionTitle - 1}pt`, fontWeight: 700 }}>{category}</h4><ul className="cf-skills-list">{categorySkills.map((s, i) => <li key={i} style={{ fontSize: `${fontSizes.skillText}pt`, fontWeight: 400 }}>{s.name}</li>)}</ul></div>); })}</section>}
        {hasCertifications && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>CERTIFICATIONS & CLEARANCES</h2>{formData.certifications.map((cert, i) => (<div key={i} className="cf-cert-item" style={{ fontSize: `${fontSizes.certificationText}pt`, fontWeight: 400 }}><strong style={{ fontWeight: 700 }}>{cert.name}</strong>{cert.issuingAuthority && ` • ${cert.issuingAuthority}`}{cert.certificationNumber && ` (#${cert.certificationNumber})`}{cert.expiryDate && ` • Expires: ${cert.expiryDate}`}</div>))}</section>}
        {hasProjects && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>PROJECTS & INITIATIVES</h2>{formData.projects.map((proj, i) => (<div key={i} className="cf-project-item"><h3 style={{ fontSize: `${fontSizes.jobTitle}pt`, fontWeight: 700 }}>{proj.title}</h3><p className="cf-company" style={{ fontSize: `${fontSizes.organization}pt`, fontWeight: 400 }}>{proj.organization} | {proj.role} | {proj.startDate} – {proj.endDate || 'Present'}</p>{proj.funding && <p style={{ fontSize: `${fontSizes.regularText}pt`, fontWeight: 400 }}><strong>Funding:</strong> {proj.funding}</p>}<ul className="cf-bullet-list">{proj.description.split('\n').filter(l => l.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt`, fontWeight: 400 }}>{line}</li>)}</ul></div>))}</section>}
        {hasAffiliations && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>PROFESSIONAL AFFILIATIONS</h2>{formData.affiliations.map((a, i) => (<div key={i} className="cf-affiliation-item" style={{ fontSize: `${fontSizes.regularText}pt`, fontWeight: 400 }}><strong style={{ fontWeight: 700 }}>{a.organization}</strong>{a.role && ` • ${a.role}`}{a.years && ` (${a.years})`}</div>))}</section>}
        {hasPublications && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>PUBLICATIONS & PRESENTATIONS</h2>{formData.publications.map((pub, i) => (<div key={i} className="cf-pub-item" style={{ fontSize: `${fontSizes.regularText}pt`, fontWeight: 400 }}>"{pub.title}" {pub.publisher && `• ${pub.publisher}`} {pub.date && `(${pub.date})`}</div>))}</section>}
        {hasLanguages && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>LANGUAGES</h2><ul className="cf-bullet-list">{formData.languages.map((l, i) => (<li key={i} style={{ fontSize: `${fontSizes.bulletText}pt`, fontWeight: 400 }}>{l.name}{l.proficiency && ` (${l.proficiency})`}</li>))}</ul></section>}
      </div>
    );
  };

  // SINGLE CANONICAL URL - WITHOUT www
  const canonicalUrl = "https://professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder";

  return (
    <>
      <style>{careerFlowStyles}</style>
      <div className="cf-resume-builder" lang="en-US">
        <Head>
          <title>Free Government Resume Builder 2026 | USAJobs Templates</title>
          <meta name="title" content="Free Government Resume Builder 2026 | USAJobs Templates" />
          <meta name="description" content="Create a professional government resume for free in 2026. USAJobs-compatible templates for federal jobs, non-profit roles. Download PDF instantly." />
          <meta name="keywords" content="government resume builder, non-profit resume, USAJobs resume, federal resume, public sector resume, NGO resume, grant writer resume, policy analyst resume, government job resume, ATS friendly government resume" />
          <meta name="author" content="Professional Government Resume Builder" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
          <meta name="date" content={safeCurrentDate} />
          <meta name="last-modified" content={safeLastModifiedDate} />
          <meta name="revisit-after" content="1 days" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          
          {/* SINGLE CANONICAL URL - WITHOUT www */}
          <link rel="canonical" href={canonicalUrl} />
          
          <meta property="og:title" content="Free Government Resume Builder 2026 | USAJobs Templates" />
          <meta property="og:description" content="Create a professional government resume for free in 2026. USAJobs-compatible templates for federal jobs, non-profit roles. Download PDF instantly." />
          <meta property="og:image" content="https://professionalresumefree.com/images/og-government-resume-builder-preview.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Free Government & Non-Profit Resume Builder - Create Professional Public Sector Resumes Online" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Professional Government Resume Builder" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="en_GB" />
          <meta property="og:locale:alternate" content="en_CA" />
          <meta property="og:locale:alternate" content="en_AU" />
          <meta property="og:updated_time" content={safeLastModifiedDate} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Free Government Resume Builder 2026 | USAJobs Templates" />
          <meta name="twitter:description" content="Create a professional government resume for free in 2026. USAJobs-compatible templates for federal jobs, non-profit roles. Download PDF instantly." />
          <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-government-resume-builder-preview.jpg" />
          <meta name="twitter:image:alt" content="Free Government Resume Builder with ATS Templates" />
          <meta name="twitter:site" content="@GovResumeFree" />
          <meta name="twitter:creator" content="@GovResumeFree" />
          <meta name="theme-color" content="#1a237e" />
          <meta name="msapplication-TileColor" content="#1a237e" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet" />
          
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
                    "name": "Free Government Resume Builder 2026 | USAJobs Templates",
                    "description": "Create a professional government resume for free in 2026. USAJobs-compatible templates for federal jobs, non-profit roles. Download PDF instantly.",
                    "datePublished": "2026-01-01",
                    "dateModified": safeLastModifiedDate,
                    "inLanguage": "en-US",
                    "isPartOf": {
                      "@type": "WebSite",
                      "@id": "https://professionalresumefree.com/#website",
                      "url": "https://professionalresumefree.com",
                      "name": "Professional Government Resume Builder",
                      "description": "Free online resume builder for government and non-profit professionals",
                      "publisher": {
                        "@type": "Organization",
                        "@id": "https://professionalresumefree.com/#organization",
                        "name": "Professional Government Resume Builder",
                        "url": "https://professionalresumefree.com",
                        "logo": {
                          "@type": "ImageObject",
                          "url": "https://professionalresumefree.com/logo.png",
                          "width": 512,
                          "height": 512
                        },
                        "sameAs": [
                          "https://twitter.com/GovResumeFree",
                          "https://linkedin.com/company/government-resume-builder"
                        ]
                      }
                    },
                    "primaryImageOfPage": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/images/og-government-resume-builder-preview.jpg",
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
                          "name": "Government Resume Builder",
                          "item": canonicalUrl
                        }
                      ]
                    },
                    "mainEntity": {
                      "@type": "SoftwareApplication",
                      "name": "Government & Non-Profit Resume Builder - ATS Optimized Public Sector Resume Maker",
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
                        "ratingValue": 4.8,
                        "ratingCount": 35420,
                        "bestRating": 5,
                        "worstRating": 1
                      },
                      "description": "Free online ATS-friendly government and non-profit resume builder for public sector professionals, policy analysts, and NGO staff.",
                      "featureList": [
                        "USAJobs Compatible Templates",
                        "Federal Resume Formatting",
                        "Non-Profit Specific Sections",
                        "Security Clearance Formatting",
                        "Grant Writing Experience Format",
                        "No Sign Up Required",
                        "Free Forever"
                      ],
                      "softwareVersion": "2026.1.0",
                      "screenshot": "https://professionalresumefree.com/images/screenshot-government-resume-builder.jpg",
                      "applicationSuite": "Public Sector Career Tools",
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
                        "datePublished": safeFaqDates[index] || safeCurrentDate,
                        "author": {
                          "@type": "Person",
                          "name": "Government Resume Builder Support Team"
                        }
                      },
                      "mainEntityOfPage": `${canonicalUrl}#webpage`
                    }))
                  },
                  {
                    "@type": "HowTo",
                    "name": "How to Create a Professional Government Resume with Our Free Builder",
                    "description": "Step-by-step guide to create an ATS-optimized government or non-profit resume for free",
                    "totalTime": "PT20M",
                    "estimatedCost": {
                      "@type": "MonetaryAmount",
                      "currency": "USD",
                      "value": "0"
                    },
                    "step": [
                      {
                        "@type": "HowToStep",
                        "position": 1,
                        "name": "Choose a Public Sector Template",
                        "text": "Select from our ATS-optimized government and non-profit resume templates designed for federal, state, local government, and NGO positions.",
                        "url": `${canonicalUrl}#templates`,
                        "image": "https://professionalresumefree.com/images/step1-government-template.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Enter Your Public Service Information",
                        "text": "Add your government experience, policy work, grant management, project leadership, and public sector achievements using our guided forms.",
                        "url": `${canonicalUrl}#editor`,
                        "image": "https://professionalresumefree.com/images/step2-public-service-info.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Customize for Your Sector",
                        "text": "Use our government-specific suggestions for security clearances, GS-grade formatting, non-profit impact measurement, and public administration keywords.",
                        "url": `${canonicalUrl}#optimize`,
                        "image": "https://professionalresumefree.com/images/step3-optimize.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 4,
                        "name": "Download Your Government Resume",
                        "text": "Export your professional government or non-profit resume as PDF - completely free, no watermarks, USAJobs ready.",
                        "url": `${canonicalUrl}#download`,
                        "image": "https://professionalresumefree.com/images/step4-download.jpg"
                      }
                    ]
                  }
                ]
              })
            }}
          />
        </Head>

        {/* Freshness Indicator */}
        <div className="cf-freshness-indicator" style={{ display: 'none' }}>
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={freshnessIndicator} />
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="cf-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/" className="cf-breadcrumb-link" prefetch={false}>
                <FiHome className="cf-breadcrumb-icon" />
                <span className="cf-breadcrumb-text">Home</span>
              </Link>
            </li>
            <li className="cf-breadcrumb-separator">
              <FiChevronRightIcon />
            </li>
            <li>
              <Link href="/ats-friendly-government-education-non-profit-resume-builder" className="cf-breadcrumb-link" prefetch={false}>
                <span className="cf-breadcrumb-text">Free Public Sector Template</span>
              </Link>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="cf-hero">
          <div className="cf-container">
            <div className="cf-hero-content">
              <div className="cf-trust-badge">
                <FiStar className="cf-trust-icon" />
                <span className="cf-trust-text">
                   Best Free Government Resume Builder 2026
                </span>
              </div>
              
              {/* SINGLE H1 TAG */}
              <h1 className="cf-hero-title">
                Free Government Resume Builder 2026: Start Now
              </h1>
              
              <p className="cf-hero-subtitle">
                Create a <strong className="cf-hero-highlight">professional, ATS-optimized public sector resume for free.</strong> Our government resume builder ensures your public service experience meets federal application standards and non-profit sector expectations.
              </p>

              <div className="cf-cta-buttons">
                <button
                  onClick={() => setActiveSection('personal')}
                  className="cf-btn-primary"
                  aria-label="Start building your free government resume now—no sign-up required"
                >
                  <span className="cf-btn-text">Start Building Your Public Sector Resume Now</span>
                  <FiArrowRight className="cf-btn-icon" />
                  <div className="cf-btn-pulse"></div>
                </button>
                
                <button
                  onClick={generatePDF}
                  className="cf-btn-secondary"
                  aria-label="Download government resume as PDF"
                  disabled={isGeneratingPDF || !hasContent()}
                >
                  <FiDownload className="cf-btn-icon" />
                  <span className="cf-btn-text">Download Government Resume PDF</span>
                </button>
              </div>

              
              <div className="cf-industry-badges">
                <div className="cf-badge-grid">
                  <span className="cf-badge-item"><FiFlag /> Federal Government</span>
                  <span className="cf-badge-item"><FiMap /> State & Local</span>
                  <span className="cf-badge-item"><FiHeart /> Non-Profit/NGO</span>
                  <span className="cf-badge-item"><FiGlobe /> International Orgs</span>
                  <span className="cf-badge-item"><FiShield /> Defense & Security</span>
                  <span className="cf-badge-item"><FiUsers /> Public Health</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cf-layout">
          <div className="cf-preview-section">
            <div className="cf-preview-header"><div className="cf-preview-actions"><button onClick={() => setShowFullPreview(!showFullPreview)} className="cf-preview-btn"><FiEye/> {showFullPreview ? 'Hide Full Preview' : 'Show Full Preview'}</button><button onClick={generatePDF} className="cf-download-btn" disabled={isGeneratingPDF || !hasContent()}><FiDownload/>{isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}</button></div></div>
            <div className={`cf-preview-container ${showFullPreview ? 'cf-full-preview' : ''}`}><div className="cf-resume-card"><div className="cf-preview-content"><div className="cf-resume-preview" ref={resumeRef}><GovernmentTemplate formData={formData}/></div></div></div></div>
          </div>
          <div className="cf-form-section">
            <div className="cf-form-nav">
              {[{id:'personal',label:'Personal',icon:<FiUser/>},{id:'experience',label:'Experience',icon:<FiBriefcase/>},{id:'education',label:'Education',icon:<FiBook/>},{id:'skills',label:'Skills',icon:<FiTool/>},{id:'projects',label:'Projects',icon:<FiTarget/>},{id:'settings',label:'Font Settings',icon:<FiSettings/>}].map(item => (<button key={item.id} className={`cf-nav-btn ${activeSection===item.id?'cf-nav-btn-active':''}`} onClick={()=>setActiveSection(item.id)}>{item.icon}<span>{item.label}</span></button>))}
            </div>
            <div className="cf-form-content">
              {activeSection==='personal'&&(
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiUser/> Personal Information</h2>
                  <div className="cf-form-card">
                    <div className="cf-form-group"><label className="cf-form-label">Full Name*<input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Smith, MPA" required className="cf-form-input"/></label><label className="cf-form-label">Email*<input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john.smith@government.gov" required className="cf-form-input"/></label></div>
                    <div className="cf-form-group"><label className="cf-form-label">Phone<input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className="cf-form-input"/></label><label className="cf-form-label">Location<input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Washington, DC" className="cf-form-input"/></label></div>
                    <label className="cf-form-label">Security Clearance<input type="text" name="clearance" value={formData.clearance} onChange={handleInputChange} placeholder="Top Secret/SCI (2024)" className="cf-form-input"/><small className="cf-form-hint">Format: Level (Investigation Date)</small></label>
                  </div>
                  <div className="cf-form-card"><label className="cf-form-label">Professional Summary*<textarea name="summary" value={formData.summary} onChange={handleInputChange} placeholder="Dedicated public sector professional with 10+ years of experience in federal government policy analysis and program management. Expertise in legislative affairs, budget oversight, and interagency coordination. Proven track record in developing and implementing evidence-based policies that improve government efficiency and public service delivery. Strong background in stakeholder engagement and cross-functional team leadership." required className="cf-form-textarea" rows="6"/><div className="cf-char-count">{formData.summary.length}/500 characters</div></label></div>
                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title"><FiGlobe/> Professional Links</h3><p className="cf-section-desc">Add your professional profiles (LinkedIn, USAJobs profile, portfolio, etc.)</p>
                    <div className="cf-social-input">
                      <div className="cf-social-input-row">
                        <div className="cf-social-input-select">
                          <select value={currentSocialLink.platform} onChange={e=>setCurrentSocialLink({...currentSocialLink,platform:e.target.value})} className="cf-form-select"><option value="">Select Platform</option><option value="LinkedIn">LinkedIn</option><option value="USAJobs">USAJobs Profile</option><option value="Portfolio">Professional Portfolio</option><option value="GitHub">GitHub (Technical)</option><option value="Idealist">Idealist Profile</option><option value="ResearchGate">ResearchGate</option></select>
                        </div>
                        <div className="cf-social-input-field">
                          <input type="url" placeholder="https://linkedin.com/in/yourprofile" value={currentSocialLink.url} onChange={e=>setCurrentSocialLink({...currentSocialLink,url:e.target.value})} className="cf-form-input"/>
                        </div>
                      </div>
                      <div className="cf-form-actions"><button onClick={addSocialLink} className="cf-add-btn" disabled={!currentSocialLink.platform||!currentSocialLink.url}><FiPlus/> {currentSocialLink.isEditing?'Update':'Add Link'}</button>{currentSocialLink.isEditing&&<button onClick={()=>setCurrentSocialLink(defaultSocialLink())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.socialLinks.length===0?<p className="cf-empty-msg">No professional links added yet</p>:formData.socialLinks.map((link,i)=>(<div key={i} className="cf-list-item"><div className="cf-item-info"><span className="cf-item-platform">{link.platform}</span><span className="cf-item-url">{formatSocialUrl(link.url)}</span></div><div className="cf-item-actions"><button onClick={()=>editSocialLink(i)} className="cf-edit-btn" aria-label={`Edit ${link.platform} link`}><FiEdit2/></button><button onClick={()=>deleteSocialLink(i)} className="cf-delete-btn" aria-label={`Delete ${link.platform} link`}><FiTrash2/></button></div></div>))}</div>
                  </div>
                </div>
              )}
              {activeSection==='experience'&&(
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiBriefcase/> Professional Experience</h2>
                  <p className="cf-section-desc">List your public sector positions in reverse chronological order (most recent first)</p>
                  <div className="cf-form-card">
                    <div className="cf-form-group"><label className="cf-form-label">Position Title*<input value={currentExperience.position} onChange={e=>setCurrentExperience({...currentExperience,position:e.target.value})} placeholder="Senior Policy Analyst" required className="cf-form-input"/></label><label className="cf-form-label">Organization/Agency*<input value={currentExperience.organization} onChange={e=>setCurrentExperience({...currentExperience,organization:e.target.value})} placeholder="U.S. Department of State" required className="cf-form-input"/></label></div>
                    <div className="cf-form-group"><label className="cf-form-label">Department / Division / Bureau<input value={currentExperience.department} onChange={e=>setCurrentExperience({...currentExperience,department:e.target.value})} placeholder="Bureau of Political-Military Affairs" className="cf-form-input"/></label><label className="cf-form-label">Location<input value={currentExperience.location} onChange={e=>setCurrentExperience({...currentExperience,location:e.target.value})} placeholder="Washington, DC" className="cf-form-input"/></label></div>
                    <div className="cf-form-group"><label className="cf-form-label">Start Date*<input type="text" placeholder="Month Year (e.g., January 2020)" value={currentExperience.startDate} onChange={e=>setCurrentExperience({...currentExperience,startDate:e.target.value})} required className="cf-form-input"/></label><label className="cf-form-label">End Date<input type="text" placeholder="Month Year or Present" value={currentExperience.endDate} onChange={e=>setCurrentExperience({...currentExperience,endDate:e.target.value})} className="cf-form-input"/></label></div>
                    <label className="cf-form-label">Key Responsibilities & Achievements*<textarea value={currentExperience.description} onChange={e=>setCurrentExperience({...currentExperience,description:e.target.value})} placeholder="• Developed and implemented foreign policy initiatives affecting $2B in annual appropriations
• Led interagency task force coordinating responses to international crises
• Drafted legislative proposals and testified before Congressional committees
• Managed team of 12 policy analysts and support staff
• Negotiated bilateral agreements with foreign governments
• Reduced program costs by 15% through process optimization" required className="cf-form-textarea" rows="8"/><div className="cf-char-count">{currentExperience.description.length}/2000 characters</div></label>
                    <div className="cf-form-actions"><button onClick={addExperience} className="cf-add-btn" disabled={!currentExperience.position||!currentExperience.organization||!currentExperience.startDate}><FiPlus/> {currentExperience.isEditing?'Update Experience':'Add Experience'}</button>{currentExperience.isEditing&&<button onClick={()=>setCurrentExperience(defaultExperience())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                  </div>
                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title">Your Professional Experience</h3>
                    {formData.experience.length===0?<p className="cf-empty-msg">No experience added yet</p>:<div className="cf-items-list">{formData.experience.map((exp,i)=>(<div key={i} className="cf-list-item"><div className="cf-item-content"><div className="cf-item-header"><strong className="cf-item-title">{exp.position}</strong><span className="cf-item-subtitle">at {exp.organization}</span></div><div className="cf-item-meta"><span>{exp.startDate} – {exp.endDate||'Present'}</span>{exp.location&&<span>{exp.location}</span>}{exp.department&&<span>{exp.department}</span>}</div><div className="cf-item-desc">{exp.description.split('\n').filter(l=>l.trim()).map((line,j)=><p key={j} className="cf-bullet-point">• {line}</p>)}</div></div><div className="cf-item-actions"><button onClick={()=>editExperience(i)} className="cf-edit-btn" aria-label={`Edit ${exp.position} experience`}><FiEdit2/></button><button onClick={()=>deleteExperience(i)} className="cf-delete-btn" aria-label={`Delete ${exp.position} experience`}><FiTrash2/></button></div></div>))}</div>}
                  </div>
                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title"><FiBookOpen/> Publications & Presentations</h3><p className="cf-section-desc">Add publications, white papers, conference presentations, or reports</p>
                    <div className="cf-skills-input">
                      <div className="cf-form-group"><label className="cf-form-label">Title*<input value={currentPublication.title} onChange={e=>setCurrentPublication({...currentPublication,title:e.target.value})} placeholder="'The Future of Digital Government Services'" className="cf-form-input"/></label><label className="cf-form-label">Publisher/Conference<input value={currentPublication.publisher} onChange={e=>setCurrentPublication({...currentPublication,publisher:e.target.value})} placeholder="Journal of Public Administration" className="cf-form-input"/></label></div>
                      <div className="cf-form-group"><label className="cf-form-label">Date<input value={currentPublication.date} onChange={e=>setCurrentPublication({...currentPublication,date:e.target.value})} placeholder="March 2024" className="cf-form-input"/></label><label className="cf-form-label">URL/Link<input value={currentPublication.url} onChange={e=>setCurrentPublication({...currentPublication,url:e.target.value})} placeholder="https://example.com/publication" className="cf-form-input"/></label></div>
                      <div className="cf-form-actions"><button onClick={addPublication} className="cf-add-btn" disabled={!currentPublication.title.trim()}><FiPlus/> {currentPublication.isEditing?'Update Publication':'Add Publication'}</button>{currentPublication.isEditing&&<button onClick={()=>setCurrentPublication(defaultPublication())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.publications.map((pub,i)=>(<div key={i} className="cf-list-item"><div>"{pub.title}" {pub.publisher&&`• ${pub.publisher}`} {pub.date&&`(${pub.date})`}</div><div className="cf-item-actions"><button onClick={()=>editPublication(i)} className="cf-edit-btn"><FiEdit2/></button><button onClick={()=>deletePublication(i)} className="cf-delete-btn"><FiTrash2/></button></div></div>))}{formData.publications.length===0&&<p className="cf-empty-msg">No publications added yet</p>}</div>
                  </div>
                </div>
              )}
              {activeSection==='education'&&(
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiBook/> Education & Training</h2>
                  <p className="cf-section-desc">List your degrees, certifications, and relevant training</p>
                  <div className="cf-form-card">
                    <div className="cf-form-group"><label className="cf-form-label">Institution*<input value={currentEducation.institution} onChange={e=>setCurrentEducation({...currentEducation,institution:e.target.value})} placeholder="Harvard University, Kennedy School of Government" required className="cf-form-input"/></label><label className="cf-form-label">Degree/Certification*<input value={currentEducation.degree} onChange={e=>setCurrentEducation({...currentEducation,degree:e.target.value})} placeholder="Master of Public Administration (MPA)" required className="cf-form-input"/></label></div>
                    <div className="cf-form-group"><label className="cf-form-label">Major/Concentration<input value={currentEducation.major} onChange={e=>setCurrentEducation({...currentEducation,major:e.target.value})} placeholder="Public Policy, International Relations" className="cf-form-input"/></label><label className="cf-form-label">Location<input value={currentEducation.location} onChange={e=>setCurrentEducation({...currentEducation,location:e.target.value})} placeholder="Cambridge, MA" className="cf-form-input"/></label></div>
                    <div className="cf-form-group"><label className="cf-form-label">Start Date<input type="text" placeholder="Month Year" value={currentEducation.startDate} onChange={e=>setCurrentEducation({...currentEducation,startDate:e.target.value})} className="cf-form-input"/></label><label className="cf-form-label">End Date / Expected<input type="text" placeholder="Month Year or Expected" value={currentEducation.endDate} onChange={e=>setCurrentEducation({...currentEducation,endDate:e.target.value})} className="cf-form-input"/></label></div>
                    <label className="cf-form-label">Honors/Awards<input value={currentEducation.honors} onChange={e=>setCurrentEducation({...currentEducation,honors:e.target.value})} placeholder="Summa Cum Laude, Dean's List" className="cf-form-input"/></label>
                    <div className="cf-form-actions"><button onClick={addEducation} className="cf-add-btn" disabled={!currentEducation.institution||!currentEducation.degree}><FiPlus/> {currentEducation.isEditing?'Update Education':'Add Education'}</button>{currentEducation.isEditing&&<button onClick={()=>setCurrentEducation(defaultEducation())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                  </div>
                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title">Your Education</h3>
                    {formData.education.length===0?<p className="cf-empty-msg">No education added yet</p>:<div className="cf-items-list">{formData.education.map((edu,i)=>(<div key={i} className="cf-list-item"><div className="cf-item-content"><div className="cf-item-header"><strong className="cf-item-title">{edu.degree}</strong>{edu.major&&<span className="cf-item-subtitle"> – {edu.major}</span>}</div><div className="cf-item-meta"><span>{edu.institution}</span><span>{edu.location}</span><span>{edu.startDate} – {edu.endDate||'Present'}</span></div>{edu.honors&&<div className="cf-item-desc"><em>{edu.honors}</em></div>}</div><div className="cf-item-actions"><button onClick={()=>editEducation(i)} className="cf-edit-btn" aria-label={`Edit ${edu.degree}`}><FiEdit2/></button><button onClick={()=>deleteEducation(i)} className="cf-delete-btn" aria-label={`Delete ${edu.degree}`}><FiTrash2/></button></div></div>))}</div>}
                  </div>
                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title"><FiShield/> Certifications & Clearances</h3><p className="cf-section-desc">Add professional certifications, security clearances, and specialized training</p>
                    <div className="cf-skills-input">
                      <div className="cf-form-group"><label className="cf-form-label">Certification/Clearance Name*<input value={currentCertification.name} onChange={e=>setCurrentCertification({...currentCertification,name:e.target.value})} placeholder="Project Management Professional (PMP)" className="cf-form-input"/></label><label className="cf-form-label">Issuing Authority<input value={currentCertification.issuingAuthority} onChange={e=>setCurrentCertification({...currentCertification,issuingAuthority:e.target.value})} placeholder="Project Management Institute" className="cf-form-input"/></label></div>
                      <div className="cf-form-group"><label className="cf-form-label">Certification Number<input value={currentCertification.certificationNumber} onChange={e=>setCurrentCertification({...currentCertification,certificationNumber:e.target.value})} placeholder="PMP-123456" className="cf-form-input"/></label><label className="cf-form-label">Expiry Date<input value={currentCertification.expiryDate} onChange={e=>setCurrentCertification({...currentCertification,expiryDate:e.target.value})} placeholder="Month Year" className="cf-form-input"/></label></div>
                      <div className="cf-form-actions"><button onClick={addCertification} className="cf-add-btn" disabled={!currentCertification.name.trim()}><FiPlus/> {currentCertification.isEditing?'Update Certification':'Add Certification'}</button>{currentCertification.isEditing&&<button onClick={()=>setCurrentCertification(defaultCertification())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.certifications.map((cert,i)=>(<div key={i} className="cf-list-item"><div><strong>{cert.name}</strong>{cert.issuingAuthority&&` • ${cert.issuingAuthority}`}{cert.certificationNumber&&` (#${cert.certificationNumber})`}{cert.expiryDate&&` • Expires: ${cert.expiryDate}`}</div><div className="cf-item-actions"><button onClick={()=>editCertification(i)} className="cf-edit-btn"><FiEdit2/></button><button onClick={()=>deleteCertification(i)} className="cf-delete-btn"><FiTrash2/></button></div></div>))}{formData.certifications.length===0&&<p className="cf-empty-msg">No certifications added yet</p>}</div>
                  </div>
                </div>
              )}
              {activeSection==='skills'&&(
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiTool/> Core Competencies</h2>
                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title">Professional Skills</h3><p className="cf-section-desc">Categorize your skills for better organization</p>
                    <div className="cf-skills-input">
                      <div className="cf-form-group"><label className="cf-form-label">Skill Name*<input value={currentSkill.name} onChange={e=>setCurrentSkill({...currentSkill,name:e.target.value})} placeholder="Policy Analysis, Grant Writing" className="cf-form-input"/></label><label className="cf-form-label">Category<select value={currentSkill.category} onChange={e=>setCurrentSkill({...currentSkill,category:e.target.value})} className="cf-form-select"><option value="Policy">Policy & Analysis</option><option value="Management">Management & Leadership</option><option value="Technical">Technical & IT</option><option value="Analytical">Analytical & Research</option><option value="Communication">Communication</option><option value="Financial">Financial & Budget</option></select></label></div>
                      <div className="cf-form-actions"><button onClick={addSkill} className="cf-add-btn" disabled={!currentSkill.name.trim()}><FiPlus/> {currentSkill.isEditing?'Update Skill':'Add Skill'}</button>{currentSkill.isEditing&&<button onClick={()=>setCurrentSkill(defaultSkill())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.skills.map((s,i)=>(<div key={i} className="cf-list-item"><div><span>{s.name}</span><span className="cf-skill-cat"> ({s.category})</span></div><div className="cf-item-actions"><button onClick={()=>editSkill(i)} className="cf-edit-btn"><FiEdit2/></button><button onClick={()=>deleteSkill(i)} className="cf-delete-btn"><FiTrash2/></button></div></div>))}{formData.skills.length===0&&<p className="cf-empty-msg">No skills added yet</p>}</div>
                  </div>
                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title"><FiGlobe/> Languages</h3><p className="cf-section-desc">List languages you speak and your proficiency level</p>
                    <div className="cf-skills-input">
                      <div className="cf-form-group"><label className="cf-form-label">Language*<input value={currentLanguage.name} onChange={e=>setCurrentLanguage({...currentLanguage,name:e.target.value})} placeholder="Spanish" className="cf-form-input"/></label><label className="cf-form-label">Proficiency Level<select value={currentLanguage.proficiency} onChange={e=>setCurrentLanguage({...currentLanguage,proficiency:e.target.value})} className="cf-form-select"><option value="">Select Proficiency</option><option value="Native">Native</option><option value="Fluent">Fluent</option><option value="Professional">Professional Working</option><option value="Limited">Limited Working</option><option value="Elementary">Elementary</option></select></label></div>
                      <div className="cf-form-actions"><button onClick={addLanguage} className="cf-add-btn" disabled={!currentLanguage.name.trim()}><FiPlus/> {currentLanguage.isEditing?'Update Language':'Add Language'}</button>{currentLanguage.isEditing&&<button onClick={()=>setCurrentLanguage(defaultLanguage())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.languages.map((l,i)=>(<div key={i} className="cf-list-item"><div>{l.name}{l.proficiency&&` (${l.proficiency})`}</div><div className="cf-item-actions"><button onClick={()=>editLanguage(i)} className="cf-edit-btn"><FiEdit2/></button><button onClick={()=>deleteLanguage(i)} className="cf-delete-btn"><FiTrash2/></button></div></div>))}{formData.languages.length===0&&<p className="cf-empty-msg">No languages added yet</p>}</div>
                  </div>
                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title"><FiUsers/> Professional Affiliations</h3><p className="cf-section-desc">Add your professional organization memberships</p>
                    <div className="cf-skills-input">
                      <div className="cf-form-group"><label className="cf-form-label">Organization*<input value={currentAffiliation.organization} onChange={e=>setCurrentAffiliation({...currentAffiliation,organization:e.target.value})} placeholder="American Society for Public Administration" className="cf-form-input"/></label><label className="cf-form-label">Role / Membership Type<input value={currentAffiliation.role} onChange={e=>setCurrentAffiliation({...currentAffiliation,role:e.target.value})} placeholder="Board Member, Committee Chair" className="cf-form-input"/></label></div>
                      <label className="cf-form-label">Years Active<input value={currentAffiliation.years} onChange={e=>setCurrentAffiliation({...currentAffiliation,years:e.target.value})} placeholder="2018-Present" className="cf-form-input"/></label>
                      <div className="cf-form-actions"><button onClick={addAffiliation} className="cf-add-btn" disabled={!currentAffiliation.organization.trim()}><FiPlus/> {currentAffiliation.isEditing?'Update Affiliation':'Add Affiliation'}</button>{currentAffiliation.isEditing&&<button onClick={()=>setCurrentAffiliation(defaultAffiliation())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.affiliations.map((a,i)=>(<div key={i} className="cf-list-item"><div><strong>{a.organization}</strong>{a.role&&` • ${a.role}`}{a.years&&` (${a.years})`}</div><div className="cf-item-actions"><button onClick={()=>editAffiliation(i)} className="cf-edit-btn"><FiEdit2/></button><button onClick={()=>deleteAffiliation(i)} className="cf-delete-btn"><FiTrash2/></button></div></div>))}{formData.affiliations.length===0&&<p className="cf-empty-msg">No affiliations added yet</p>}</div>
                  </div>
                </div>
              )}
              {activeSection==='projects'&&(
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiTarget/> Projects & Initiatives</h2>
                  <p className="cf-section-desc">List significant projects, grants, or initiatives you've led or contributed to</p>
                  <div className="cf-form-card">
                    <div className="cf-form-group"><label className="cf-form-label">Project Title*<input value={currentProject.title} onChange={e=>setCurrentProject({...currentProject,title:e.target.value})} placeholder="Digital Government Transformation Initiative" required className="cf-form-input"/></label><label className="cf-form-label">Organization/Agency*<input value={currentProject.organization} onChange={e=>setCurrentProject({...currentProject,organization:e.target.value})} placeholder="General Services Administration" required className="cf-form-input"/></label></div>
                    <div className="cf-form-group"><label className="cf-form-label">Your Role<input value={currentProject.role} onChange={e=>setCurrentProject({...currentProject,role:e.target.value})} placeholder="Project Lead, Technical Advisor" className="cf-form-input"/></label><label className="cf-form-label">Funding Amount/Source<input value={currentProject.funding} onChange={e=>setCurrentProject({...currentProject,funding:e.target.value})} placeholder="$2.5M Federal Grant" className="cf-form-input"/></label></div>
                    <div className="cf-form-group"><label className="cf-form-label">Start Date<input type="text" placeholder="Month Year" value={currentProject.startDate} onChange={e=>setCurrentProject({...currentProject,startDate:e.target.value})} className="cf-form-input"/></label><label className="cf-form-label">End Date<input type="text" placeholder="Month Year or Ongoing" value={currentProject.endDate} onChange={e=>setCurrentProject({...currentProject,endDate:e.target.value})} className="cf-form-input"/></label></div>
                    <label className="cf-form-label">Project Description & Impact*<textarea value={currentProject.description} onChange={e=>setCurrentProject({...currentProject,description:e.target.value})} placeholder="• Led cross-functional team of 15 to implement new digital service platform
• Improved citizen access to government services by 40%
• Reduced processing time for applications from 30 days to 3 days
• Managed $2.5M budget with 98% allocation accuracy
• Presented project outcomes at National Government Innovation Summit" required className="cf-form-textarea" rows="8"/><div className="cf-char-count">{currentProject.description.length}/1500 characters</div></label>
                    <div className="cf-form-actions"><button onClick={addProject} className="cf-add-btn" disabled={!currentProject.title||!currentProject.organization}><FiPlus/> {currentProject.isEditing?'Update Project':'Add Project'}</button>{currentProject.isEditing&&<button onClick={()=>setCurrentProject(defaultProject())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                  </div>
                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title">Your Projects & Initiatives</h3>
                    {formData.projects.length===0?<p className="cf-empty-msg">No projects added yet</p>:<div className="cf-items-list">{formData.projects.map((proj,i)=>(<div key={i} className="cf-list-item"><div className="cf-item-content"><div className="cf-item-header"><strong className="cf-item-title">{proj.title}</strong><span className="cf-item-subtitle">at {proj.organization}</span></div><div className="cf-item-meta"><span>{proj.role}</span><span>{proj.startDate} – {proj.endDate||'Ongoing'}</span>{proj.funding&&<span>{proj.funding}</span>}</div><div className="cf-item-desc">{proj.description.split('\n').filter(l=>l.trim()).map((line,j)=><p key={j} className="cf-bullet-point">• {line}</p>)}</div></div><div className="cf-item-actions"><button onClick={()=>editProject(i)} className="cf-edit-btn" aria-label={`Edit ${proj.title} project`}><FiEdit2/></button><button onClick={()=>deleteProject(i)} className="cf-delete-btn" aria-label={`Delete ${proj.title} project`}><FiTrash2/></button></div></div>))}</div>}
                  </div>
                </div>
              )}
              {activeSection==='settings'&&(
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiSettings/> Font Size Settings</h2>
                  <p className="cf-section-desc">Customize font sizes for your government resume PDF. Traditional serif fonts recommended for formal applications.</p>
                  <div className="cf-form-card">
                    <div className="cf-font-grid">
                      {[{key:'name',label:'Name'},{key:'sectionTitle',label:'Section Titles'},{key:'jobTitle',label:'Job Titles'},{key:'organization',label:'Organization Names'},{key:'degree',label:'Degrees'},{key:'institution',label:'Institution Names'},{key:'institutionDate',label:'Institution Dates'},{key:'regularText',label:'Regular Text'},{key:'bulletText',label:'Bullet Points'},{key:'contactInfo',label:'Contact Info'},{key:'skillText',label:'Skills Text'},{key:'certificationText',label:'Certification Text'},{key:'clearanceText',label:'Clearance Text'}].map(({key,label})=>(
                        <div key={key} className="cf-font-control">
                          <label className="cf-font-label"><span>{label}</span><span className="cf-font-value">{fontSizes[key]}pt</span></label>
                          <input type="range" min={key==='institutionDate'?4:6} max={key==='name'?18:key==='sectionTitle'?14:key==='jobTitle'||key==='degree'||key==='clearanceText'?14:12} value={fontSizes[key]} onChange={e=>handleFontSizeChange(key,e.target.value)} className="cf-font-slider"/>
                        </div>
                      ))}
                    </div>
                    <button onClick={resetFontSizes} className="cf-reset-btn">Reset to Government Standard Font Sizes</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="cf-faq-section" aria-labelledby="faq-title">
          <div className="cf-container">
            <div className="cf-section-header">
              <h2 className="cf-section-title" id="faq-title">Frequently Asked Questions</h2>
              <p className="cf-section-subtitle">
                Everything you need to know about creating professional government and non-profit resumes with our tool.
              </p>
            </div>
            <div className="cf-faq-grid">
              {faqs.map((faq, index) => (
                <div key={index} className="cf-faq-item">
                  <h3 className="cf-faq-question">{faq.question}</h3>
                  <p className="cf-faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cf-cta-section" aria-labelledby="cta-title">
          <div className="cf-container">
            <div className="cf-cta-content">
              <h2 className="cf-cta-title" id="cta-title">Ready to Advance Your Public Service Career?</h2>
              <p className="cf-cta-subtitle">
                Join 85,000+ government and non-profit professionals who secured positions with our free ATS-friendly public sector resume builder.
              </p>
              <div className="cf-cta-btn-wrap">
                <button
                  onClick={() => setActiveSection('personal')}
                  className="cf-cta-btn"
                  aria-label="Create your free government resume now—no sign-up required"
                >
                  <span className="cf-cta-btn-text">Create Your Free Government Resume Now</span>
                  <FiArrowRight className="cf-cta-btn-icon" />
                </button>
              </div>
              <div className="cf-cta-guarantee">
                <FiCheck className="cf-guarantee-icon" />
                <span className="cf-guarantee-text">USAJobs Compatible • Federal Formatting • No Sign Up Required • Free Forever • ATS Optimized</span>
              </div>
            </div>
          </div>
        </section>

        {/* Full Preview Modal */}
        {showFullPreview && (
          <div className="cf-modal" onClick={() => setShowFullPreview(false)}>
            <div className="cf-modal-content" onClick={e => e.stopPropagation()}>
              <div className="cf-modal-header">
                <h2>Full Government Resume Preview</h2>
                <button className="cf-close-btn" onClick={() => setShowFullPreview(false)}><FiX /></button>
              </div>
              <div className="cf-modal-pages">
                <div className="cf-modal-page">
                  <GovernmentTemplate formData={formData} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Share Popup */}
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

// SSG + ISR Implementation
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

  // Breadcrumb data for structured data - WITHOUT www
  const breadcrumbData = [
    { name: 'Home', item: 'https://professionalresumefree.com/' },
    { name: 'Government Resume Builder', item: 'https://professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder' }
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

export default GovernmentResume;