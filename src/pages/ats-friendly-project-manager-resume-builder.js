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
  FiTool,
  FiTrendingUp,
  FiSearch,
  FiBarChart,
  FiTarget,
  FiLayers,
  FiDollarSign,
  FiUsers,
  FiPieChart,
  FiMenu,
  FiX as FiCloseIcon,
  FiCode,
  FiShoppingBag,
  FiMonitor,
  FiTruck
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

  @keyframes pulse { 0% { width: 0; height: 0; opacity: 0.5; } 100% { width: 300px; height: 300px; opacity: 0; } }
  @keyframes modalSlideIn { from { opacity: 0; transform: translateY(-20px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
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
  .cf-universal-template { color: #000000; line-height: 1.25; height: 100%; }
  .cf-resume-header { text-align: center; margin-bottom: 8pt; padding-bottom: 6pt; border-bottom: 0.5pt solid #000000; }
  .cf-resume-name { font-weight: 700; margin: 0 0 3pt; color: #000000; text-transform: uppercase; letter-spacing: 0.4pt; }
  .cf-nationality { font-weight: 400; color: #495057; }
  .cf-contact-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 4pt; color: #495057; margin-top: 3pt; }
  .cf-contact-item { display: flex; align-items: center; gap: 2pt; }
  .cf-contact-separator { color: #adb5bd; }
  .cf-section { margin-bottom: 8pt; page-break-inside: avoid; }
  .cf-section-title { text-transform: uppercase; letter-spacing: 0.5pt; margin: 0 0 3pt; padding-bottom: 1pt; border-bottom: 0.5pt solid #000000; color: #000000; font-weight: 700; }
  .cf-summary-text { margin: 0; text-align: justify; line-height: 1.3; }
  .cf-experience-item, .cf-education-item { margin-bottom: 6pt; page-break-inside: avoid; }
  .cf-experience-header h3 { font-weight: 700; margin: 0 0 1.5pt; color: #000000; }
  .cf-company { color: #495057; margin: 0 0 3pt; font-style: italic; }
  .cf-project-metrics { color: #6c757d; }
  .cf-institution-text { color: #495057; }
  .cf-institution-date { color: #6c757d; }
  .cf-bullet-list { margin: 3pt 0 0; padding-left: 8pt; list-style-type: disc; }
  .cf-bullet-list li { margin-bottom: 2pt; text-align: justify; line-height: 1.25; }
  .cf-skills-grid { display: flex; flex-wrap: wrap; gap: 4pt; }
  .cf-skill-item { background: #f8f9fa; padding: 1.5pt 4pt; border-radius: 1.5pt; border: 0.5pt solid #dee2e6; }
  .cf-cert-item, .cf-project-item { margin-bottom: 3pt; line-height: 1.25; }

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
  .cf-item-content { flex: 1; display: flex; flex-direction: column; gap: 8px; min-width: 0; }
  .cf-item-header { display: flex; flex-wrap: wrap; gap: 8px; align-items: baseline; }
  .cf-item-title { font-weight: 700; color: var(--cf-on-background); word-break: break-word; font-size: 16px; }
  .cf-item-subtitle { color: var(--cf-on-surface-variant); font-size: 14px; word-break: break-word; }
  .cf-item-meta { display: flex; gap: 16px; flex-wrap: wrap; color: var(--cf-outline); font-size: 12px; align-items: center; letter-spacing: 0.05em; }
  .cf-item-desc { margin-top: 8px; }
  .cf-bullet-point { margin: 4px 0; font-size: 14px; color: var(--cf-on-surface-variant); line-height: 1.5; }
  .cf-item-platform { font-weight: 600; color: var(--cf-primary); font-size: 14px; }
  .cf-item-url { color: var(--cf-on-surface-variant); font-size: 12px; word-break: break-all; }
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
  .cf-modal-page .cf-universal-template { width: 100%; height: 100%; padding: 10mm 15mm; box-sizing: border-box; overflow-y: auto; }

  .cf-share-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); z-index: 9999; display: flex; justify-content: center; align-items: center; padding: 20px; }
  .cf-share-card { background: var(--cf-surface-container-high); border-radius: 8px; max-width: 420px; width: 100%; padding: 32px 28px; text-align: center; border: 0.5px solid rgba(212, 175, 55, 0.4); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6); animation: modalSlideIn 0.3s ease-out; }
  .cf-share-icon { font-size: 40px; margin-bottom: 16px; display: block; }
  .cf-share-headline { font-family: var(--cf-font-display); font-size: 24px; font-weight: 600; color: var(--cf-primary); margin: 0 0 12px; }
  .cf-share-body { font-family: var(--cf-font-body); font-size: 15px; color: var(--cf-on-surface-variant); margin: 0 0 28px; line-height: 1.6; }
  .cf-share-close-btn { display: inline-block; background: var(--cf-primary); color: var(--cf-on-primary); border: none; padding: 12px 32px; border-radius: 2px; font-family: var(--cf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--cf-transition-base); }
  .cf-share-close-btn:hover { filter: brightness(1.1); box-shadow: 0 0 18px rgba(242, 202, 80, 0.3); transform: translateY(-1px); }

  @media (min-width: 1024px) { .cf-layout { flex-direction: row; gap: 48px; } .cf-preview-section { position: sticky; top: 100px; align-self: flex-start; max-height: calc(100vh - 120px); overflow-y: auto; } .cf-form-section { max-width: 500px; } .cf-faq-grid { grid-template-columns: repeat(2, 1fr); } .cf-form-group { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 1023px) { :root { --cf-margin-desktop: 32px; --cf-section-gap: 80px; } .cf-container { padding: 0 var(--cf-margin-desktop); } .cf-hero { padding: 100px 0 60px; min-height: auto; } .cf-hero-title { font-size: 48px; } .cf-layout { padding: 60px var(--cf-margin-desktop); gap: 32px; } .cf-form-group { grid-template-columns: 1fr 1fr; } .cf-faq-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 768px) { :root { --cf-margin-desktop: 24px; --cf-section-gap: 60px; } .cf-hero { padding: 80px 0 40px; } .cf-hero-title { font-size: 36px; } .cf-hero-subtitle { font-size: 14px; } .cf-cta-buttons { flex-direction: column; align-items: center; gap: 12px; } .cf-btn-primary, .cf-btn-secondary, .cf-preview-btn, .cf-download-btn, .cf-cta-btn { width: 100%; justify-content: center; } .cf-layout { padding: 40px var(--cf-margin-desktop); gap: 24px; } .cf-preview-container { padding: 16px; } .cf-resume-preview { width: 100%; min-height: auto; padding: 8mm 10mm; } .cf-form-nav { gap: 6px; padding: 12px; } .cf-nav-btn { min-width: 80px; flex: 1 1 calc(50% - 6px); padding: 10px 14px; font-size: 11px; } .cf-nav-btn span { display: none; } .cf-form-card { padding: 16px; } .cf-form-group { grid-template-columns: 1fr; } .cf-hero-stats { grid-template-columns: repeat(2, 1fr); gap: 16px; } .cf-badge-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; } .cf-faq-grid { grid-template-columns: 1fr; } .cf-faq-section, .cf-cta-section { padding: 60px var(--cf-margin-mobile); } .cf-section-header h2, .cf-cta-title { font-size: 28px; } .cf-modal-content { margin: 0; border-radius: 0; max-height: 100vh; width: 100%; } .cf-modal-page { width: 100%; height: auto; min-height: 400px; } .cf-modal-page .cf-universal-template { padding: 8mm 12mm; } .cf-font-grid { grid-template-columns: 1fr 1fr; } .cf-list-item { flex-direction: column; gap: 12px; } .cf-item-actions { margin-left: 0; align-self: flex-end; } .cf-share-card { margin: 0 16px; padding: 24px 20px; } }
  @media (max-width: 480px) { :root { --cf-margin-desktop: 16px; --cf-section-gap: 48px; } .cf-hero-title { font-size: 28px; } .cf-hero-subtitle { font-size: 13px; } .cf-hero-stats, .cf-badge-grid { grid-template-columns: 1fr; } .cf-stat-number { font-size: 2rem; } .cf-layout { padding: 32px var(--cf-margin-desktop); } .cf-resume-preview { padding: 6mm 8mm; } .cf-nav-btn { min-width: 60px; flex: 1 1 calc(50% - 6px); padding: 8px 10px; } .cf-form-card { padding: 12px; } .cf-form-section-title { font-size: 20px; } .cf-sub-section-title { font-size: 16px; } .cf-font-grid { grid-template-columns: 1fr; } .cf-faq-item { padding: 20px; } .cf-faq-question { font-size: 18px; } .cf-section-header h2, .cf-cta-title { font-size: 24px; } .cf-cta-btn { padding: 16px 32px; font-size: 14px; } .cf-cta-guarantee { padding: 12px 20px; flex-wrap: wrap; justify-content: center; } .cf-guarantee-text { font-size: 12px; } .cf-modal-header { padding: 16px 20px; } .cf-modal-header h3 { font-size: 16px; } .cf-modal-pages { padding: 16px; } .cf-modal-page .cf-universal-template { padding: 6mm 8mm; } .cf-share-headline { font-size: 20px; } .cf-share-body { font-size: 13px; } }
  @media (max-width: 360px) { .cf-hero-title { font-size: 24px; } .cf-btn-primary, .cf-btn-secondary { padding: 12px 20px; font-size: 12px; } }
  @media print { .cf-resume-builder, .cf-layout, .cf-preview-section, .cf-form-section, .cf-faq-section, .cf-cta-section, .cf-hero, .cf-breadcrumb, .cf-modal { display: none !important; } .cf-resume-preview { display: block !important; box-shadow: none !important; margin: 0 !important; padding: 10mm 15mm !important; width: 100% !important; height: auto !important; page-break-inside: avoid; background: #ffffff !important; border: none !important; } .cf-universal-template, .cf-section { page-break-inside: avoid; } }
`;

const ProjectManagerResume = ({ seoData, buildTimestamp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // --- Default item factories ---
  const defaultExperience = () => ({
    employer: '',
    position: '',
    industry: '',
    startDate: '',
    endDate: '',
    description: '',
    budget: '',
    teamSize: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultEducation = () => ({
    institution: '',
    degree: '',
    specialization: '',
    startDate: '',
    endDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultSkill = () => ({
    name: '',
    category: '',
    proficiency: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultCertification = () => ({
    name: '',
    issuer: '',
    certNumber: '',
    expiryDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultProject = () => ({
    name: '',
    client: '',
    role: '',
    duration: '',
    outcome: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultMethodology = () => ({
    name: '',
    level: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultLanguage = () => ({
    name: '',
    proficiency: '',
    isEditing: false,
    editIndex: null
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
    nationality: '',
    summary: '',
    experience: [],
    education: [],
    skills: [],
    certifications: [],
    projects: [],
    methodologies: [],
    languages: [],
    socialLinks: []
  });

  // Font size state - Project management specific
  const [fontSizes, setFontSizes] = useState({
    name: 14,
    sectionTitle: 10,
    contactInfo: 7,
    jobTitle: 9,
    company: 7,
    degree: 9,
    institution: 7,
    institutionDate: 6,
    regularText: 8,
    bulletText: 8,
    skillText: 7,
    certText: 8,
    metricText: 7
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentSkill, setCurrentSkill] = useState(defaultSkill());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentProject, setCurrentProject] = useState(defaultProject());
  const [currentMethodology, setCurrentMethodology] = useState(defaultMethodology());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);

  // Testimonials for Structured Data
  const testimonials = [
    {
      quote: "Created my international PM resume in 15 minutes and landed interviews with Fortune 500 companies. The global project templates are game-changing!",
      metric: "Found Senior PM Role in 3 Weeks",
      name: "Michael R.",
      role: "Senior Project Manager",
      company: "Global Tech Corporation"
    },
    {
      quote: "Finally a resume builder that understands project management metrics. The ATS templates helped me pass screening systems at top consulting firms.",
      metric: "4 Interviews in 1 Week",
      name: "Sarah K.",
      role: "IT Project Manager",
      company: "Global Consulting Firm"
    },
    {
      quote: "As a PMP-certified professional, the industry-specific templates helped showcase my global project experience effectively.",
      metric: "30% Salary Increase",
      name: "James L.",
      role: "Program Manager",
      company: "Multinational Corporation"
    },
    {
      quote: "The international resume builder saved me - could update my CV for different countries. Professional results without localization hassle.",
      metric: "Global Role Success",
      name: "Anika P.",
      role: "Agile Project Manager",
      company: "International Software Company"
    },
    {
      quote: "Project management ATS-friendly templates actually work! Got callbacks from companies that previously ignored my applications.",
      metric: "6x More Responses",
      name: "David W.",
      role: "Construction Project Manager",
      company: "Global Engineering Firm"
    },
    {
      quote: "Free PDF download with proper project management formatting? Unbeatable value. Best PM resume builder I've found worldwide.",
      metric: "Perfect Resume in 20min",
      name: "Emma S.",
      role: "Project Director",
      company: "International NGO"
    }
  ];

  // FAQ Data for Structured Data
  const faqs = [
    {
      question: "Is this project management resume builder really free with no hidden costs?",
      answer: "Yes, our project management resume builder is completely free with no hidden costs or watermarks. Create, edit, and download your professional PM resume in PDF format without any payment required."
    },
    {
      question: "What does ATS-friendly mean for project management resumes?",
      answer: "ATS-friendly means our project management resume templates are optimized to pass through Applicant Tracking Systems used by 95% of global companies. This ensures your project metrics, methodologies, and achievements are properly scanned and recognized."
    },
    {
      question: "Can I download my project management resume as PDF without creating an account?",
      answer: "Absolutely! Download your professional project management resume in PDF format without creating an account. Everything is completely free and accessible immediately for PMs worldwide."
    },
    {
      question: "How many project management resume templates are available for free?",
      answer: "We offer professionally designed ATS-friendly project management resume templates for IT, Construction, Healthcare, Consulting, Agile, and Waterfall methodologies. All templates are completely free and optimized for global hiring."
    },
    {
      question: "How does your project management resume builder work?",
      answer: "Our builder uses ATS-optimized project management templates with proper PMI terminology formatting. We guide you to highlight project achievements, budgets, team sizes, and methodologies that global employers look for."
    },
    {
      question: "Can I edit my project management resume after downloading it?",
      answer: "Yes, you can always come back and edit your project management resume. Your work saves automatically, and you can download updated versions as many times as needed—completely free."
    }
  ];

  // --- Font Size Handler ---
  const handleFontSizeChange = (key, value) => {
    setFontSizes(prev => ({
      ...prev,
      [key]: Math.max(4, Math.min(24, parseInt(value) || prev[key]))
    }));
  };

  const resetFontSizes = () => {
    setFontSizes({
      name: 14,
      sectionTitle: 10,
      contactInfo: 7,
      jobTitle: 9,
      company: 7,
      degree: 9,
      institution: 7,
      institutionDate: 6,
      regularText: 8,
      bulletText: 8,
      skillText: 7,
      certText: 8,
      metricText: 7
    });
  };

  // --- Utility Functions ---
  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
      github: <FiTool />,
      portfolio: <FiBriefcase />,
      website: <FiGlobe />,
      pmnetwork: <FiUsers />,
      upwork: <FiBriefcase />
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

  const hasContent = () => {
    return (
      formData.fullName ||
      formData.email ||
      formData.summary ||
      formData.socialLinks.length > 0 ||
      formData.experience.length > 0 ||
      formData.education.length > 0 ||
      formData.skills.length > 0 ||
      formData.certifications.length > 0 ||
      formData.projects.length > 0 ||
      formData.methodologies.length > 0 ||
      formData.languages.length > 0
    );
  };

  // --- Item CRUD Functions ---
  const createAddFunction = (key, current, setter, defaultFunc, isValid) => () => {
    if (!isValid()) return;
    const item = { ...current };
    if (item.isEditing) {
      const updated = [...formData[key]];
      updated[item.editIndex] = { ...item, isEditing: false, editIndex: null };
      setFormData({ ...formData, [key]: updated });
    } else {
      setFormData({ ...formData, [key]: [...formData[key], { ...item, isEditing: false, editIndex: null }] });
    }
    setter(defaultFunc());
  };

  const createEditFunction = (key, setter) => (index) => {
    const item = formData[key][index];
    setter({ ...item, isEditing: true, editIndex: index });
  };

  const createDeleteFunction = (key) => (index) => {
    const updated = [...formData[key]];
    updated.splice(index, 1);
    setFormData({ ...formData, [key]: updated });
  };

  const addExperience = createAddFunction('experience', currentExperience, setCurrentExperience, defaultExperience, 
    () => currentExperience.position && currentExperience.employer && currentExperience.startDate);
  
  const editExperience = createEditFunction('experience', setCurrentExperience);
  const deleteExperience = createDeleteFunction('experience');

  const addEducation = createAddFunction('education', currentEducation, setCurrentEducation, defaultEducation, 
    () => currentEducation.institution && currentEducation.degree);
  
  const editEducation = createEditFunction('education', setCurrentEducation);
  const deleteEducation = createDeleteFunction('education');

  const addSkill = createAddFunction('skills', currentSkill, setCurrentSkill, defaultSkill, 
    () => currentSkill.name.trim());
  
  const editSkill = createEditFunction('skills', setCurrentSkill);
  const deleteSkill = createDeleteFunction('skills');

  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, 
    () => currentCertification.name.trim());
  
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');

  const addProject = createAddFunction('projects', currentProject, setCurrentProject, defaultProject, 
    () => currentProject.name.trim());
  
  const editProject = createEditFunction('projects', setCurrentProject);
  const deleteProject = createDeleteFunction('projects');

  const addMethodology = createAddFunction('methodologies', currentMethodology, setCurrentMethodology, defaultMethodology, 
    () => currentMethodology.name.trim());
  
  const editMethodology = createEditFunction('methodologies', setCurrentMethodology);
  const deleteMethodology = createDeleteFunction('methodologies');

  const addLanguage = createAddFunction('languages', currentLanguage, setCurrentLanguage, defaultLanguage, 
    () => currentLanguage.name.trim());
  
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

  // --- PDF Generation ---
  const generatePDF = async () => {
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    try {
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      
      if (!hasContent()) {
        alert("Please add content before generating PDF.");
        return;
      }

      const el = resumeRef.current;
      if (!el) return;

      const originalStates = {
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
          const clone = doc.querySelector('.cf-resume-preview');
          if (clone) {
            clone.style.display = 'block';
            clone.style.visibility = 'visible';
            clone.style.opacity = '1';
            clone.style.width = '210mm';
            clone.style.height = '297mm';
            clone.style.background = '#ffffff';
            clone.style.color = '#000000';
            
            // Apply custom font sizes
            const name = clone.querySelector('.cf-resume-name');
            if (name) name.style.fontSize = `${fontSizes.name}pt`;
            
            const sectionTitles = clone.querySelectorAll('.cf-section-title');
            sectionTitles.forEach(title => {
              title.style.fontSize = `${fontSizes.sectionTitle}pt`;
            });
            
            const contactItems = clone.querySelectorAll('.cf-contact-item');
            contactItems.forEach(item => {
              item.style.fontSize = `${fontSizes.contactInfo}pt`;
            });
            
            const jobTitles = clone.querySelectorAll('.cf-experience-item h3');
            jobTitles.forEach(title => {
              title.style.fontSize = `${fontSizes.jobTitle}pt`;
            });
            
            const companies = clone.querySelectorAll('.cf-company');
            companies.forEach(company => {
              company.style.fontSize = `${fontSizes.company}pt`;
            });
            
            const degrees = clone.querySelectorAll('.cf-education-item h3');
            degrees.forEach(degree => {
              degree.style.fontSize = `${fontSizes.degree}pt`;
            });
            
            const institutions = clone.querySelectorAll('.cf-institution-text');
            institutions.forEach(institution => {
              institution.style.fontSize = `${fontSizes.institution}pt`;
            });
            
            const institutionDates = clone.querySelectorAll('.cf-institution-date');
            institutionDates.forEach(date => {
              date.style.fontSize = `${fontSizes.institutionDate}pt`;
            });
            
            const regularTexts = clone.querySelectorAll('.cf-summary-text, .cf-cert-item, .cf-project-item');
            regularTexts.forEach(text => {
              text.style.fontSize = `${fontSizes.regularText}pt`;
            });
            
            const bulletPoints = clone.querySelectorAll('.cf-bullet-list li');
            bulletPoints.forEach(bullet => {
              bullet.style.fontSize = `${fontSizes.bulletText}pt`;
            });
            
            const skills = clone.querySelectorAll('.cf-skills-grid .cf-skill-item');
            skills.forEach(skill => {
              skill.style.fontSize = `${fontSizes.skillText}pt`;
            });
            
            const certTexts = clone.querySelectorAll('.cf-cert-item');
            certTexts.forEach(cert => {
              cert.style.fontSize = `${fontSizes.certText}pt`;
            });
            
            const metricTexts = clone.querySelectorAll('.cf-project-metrics');
            metricTexts.forEach(metric => {
              metric.style.fontSize = `${fontSizes.metricText}pt`;
            });
            
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
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');

      Object.assign(el.style, originalStates);

      pdf.save(`${formData.fullName || 'project_manager_resume'}.pdf`);
      setShowSharePopup(true);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Project Manager Resume Template ---
  const ProjectManagerTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasSkills = formData.skills.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasProjects = formData.projects.length > 0;
    const hasMethodologies = formData.methodologies.length > 0;
    const hasLanguages = formData.languages.length > 0;

    return (
      <div className="cf-universal-template">
        <header className="cf-resume-header">
          <h1 className="cf-resume-name" style={{ fontSize: `${fontSizes.name}pt` }}>
            {formData.fullName || 'Your Name'}
            {formData.nationality && <span className="cf-nationality"> • {formData.nationality}</span>}
          </h1>
          <div className="cf-contact-row">
            {formData.email && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMail /> {formData.email}</div>}
            {(formData.email && (formData.phone || formData.address)) && <div className="cf-contact-separator">•</div>}
            {formData.phone && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiPhone /> {formData.phone}</div>}
            {(formData.phone && formData.address) && <div className="cf-contact-separator">•</div>}
            {formData.address && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMapPin /> {formData.address}</div>}
            {formData.socialLinks.map((link, i) => (
              <div key={i} className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}>
                {getSocialIcon(link.platform)} {formatSocialUrl(link.url)}
              </div>
            ))}
          </div>
        </header>

        {hasSummary && (
          <section className="cf-section">
            <h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EXECUTIVE SUMMARY</h2>
            <p className="cf-summary-text" style={{ fontSize: `${fontSizes.regularText}pt` }}>{formData.summary}</p>
          </section>
        )}

        {hasExperience && (
          <section className="cf-section">
            <h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className="cf-experience-item">
                <div className="cf-experience-header">
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{exp.position}</h3>
                  <p className="cf-company" style={{ fontSize: `${fontSizes.company}pt` }}>
                    {exp.employer}{exp.industry && ` | ${exp.industry}`} • {exp.startDate} – {exp.endDate || 'Present'}
                    {(exp.budget || exp.teamSize) && (
                      <span className="cf-project-metrics" style={{ fontSize: `${fontSizes.metricText}pt` }}>
                        {exp.budget && ` | Budget: ${exp.budget}`}
                        {exp.teamSize && ` | Team: ${exp.teamSize}`}
                      </span>
                    )}
                  </p>
                </div>
                <ul className="cf-bullet-list">
                  {exp.description.split('\n').filter(line => line.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{line}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasProjects && (
          <section className="cf-section">
            <h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>KEY PROJECTS</h2>
            {formData.projects.map((proj, i) => (
              <div key={i} className="cf-project-item" style={{ fontSize: `${fontSizes.regularText}pt` }}>
                <strong>{proj.name}</strong>
                {proj.client && ` | ${proj.client}`}
                {proj.role && ` | Role: ${proj.role}`}
                {proj.duration && ` | Duration: ${proj.duration}`}
                {proj.outcome && ` • ${proj.outcome}`}
              </div>
            ))}
          </section>
        )}

        {hasCertifications && (
          <section className="cf-section">
            <h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CERTIFICATIONS</h2>
            {formData.certifications.map((cert, i) => (
              <div key={i} className="cf-cert-item" style={{ fontSize: `${fontSizes.certText}pt` }}>
                <strong>{cert.name}</strong>
                {cert.issuer && ` – ${cert.issuer}`}
                {cert.certNumber && ` (Cert #: ${cert.certNumber})`}
                {cert.expiryDate && ` – Expires: ${cert.expiryDate}`}
              </div>
            ))}
          </section>
        )}

        {hasSkills && (
          <section className="cf-section">
            <h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>SKILLS & COMPETENCIES</h2>
            <div className="cf-skills-grid">
              {formData.skills.map((skill, i) => (
                <div key={i} className="cf-skill-item" style={{ fontSize: `${fontSizes.skillText}pt` }}>
                  {skill.name}{skill.category && ` (${skill.category})`}{skill.proficiency && ` – ${skill.proficiency}`}
                </div>
              ))}
            </div>
          </section>
        )}

        {hasMethodologies && (
          <section className="cf-section">
            <h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>METHODOLOGIES & TOOLS</h2>
            <ul className="cf-bullet-list">
              {formData.methodologies.map((m, i) => <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{m.name}{m.level && ` (${m.level})`}</li>)}
            </ul>
          </section>
        )}

        {hasEducation && (
          <section className="cf-section">
            <h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EDUCATION</h2>
            {formData.education.map((edu, i) => (
              <div key={i} className="cf-education-item">
                <h3 style={{ fontSize: `${fontSizes.degree}pt` }}>
                  {edu.degree}{edu.specialization && ` – ${edu.specialization}`}
                </h3>
                <p className="cf-institution-text" style={{ fontSize: `${fontSizes.institution}pt` }}>
                  {edu.institution} | 
                  <span className="cf-institution-date" style={{ fontSize: `${fontSizes.institutionDate}pt` }}>
                    {edu.startDate} – {edu.endDate || 'Present'}
                  </span>
                </p>
              </div>
            ))}
          </section>
        )}

        {hasLanguages && (
          <section className="cf-section">
            <h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>LANGUAGES</h2>
            <ul className="cf-bullet-list">
              {formData.languages.map((l, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt` }}>
                  {l.name}{l.proficiency && ` (${l.proficiency})`}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    );
  };

  return (
    <>
      <style>{careerFlowStyles}</style>
      <div className="cf-resume-builder" lang="en-US">
        <Head>
          <title>Free PM Resume Builder 2026 | ATS Project Manager Templates</title>
          <meta name="title" content="Free PM Resume Builder 2026 | ATS Project Manager Templates" />
          <meta name="description" content="Create a professional project manager resume for free in 2026. ATS-optimized templates for PMs worldwide. Download PDF instantly." />
          <meta name="keywords" content="project manager resume builder, PM resume templates, project management CV, ATS friendly PM resume, free resume builder for project managers, construction project manager, IT project manager, agile PM resume, global project manager, PMP resume" />
          <meta name="author" content="Professional Project Manager Resume Free" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
          <meta name="date" content={safeCurrentDate} />
          <meta name="last-modified" content={safeLastModifiedDate} />
          <meta name="revisit-after" content="1 days" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <link rel="canonical" href="https://professionalresumefree.com/ats-friendly-project-manager-resume-builder" />
          <meta property="og:title" content="Free PM Resume Builder 2026 | ATS Project Manager Templates" />
          <meta property="og:description" content="Create a professional project manager resume for free in 2026. ATS-optimized templates for PMs worldwide. Download PDF instantly." />
          <meta property="og:image" content="https://professionalresumefree.com/images/og-pm-resume-builder-preview.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Free Project Manager Resume Builder - Create Professional PM Resumes Online" />
          <meta property="og:url" content="https://professionalresumefree.com/ats-friendly-project-manager-resume-builder" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Professional Project Manager Resume Free" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="en_GB" />
          <meta property="og:locale:alternate" content="en_CA" />
          <meta property="og:locale:alternate" content="en_AU" />
          <meta property="og:updated_time" content={safeLastModifiedDate} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Free PM Resume Builder 2026 | ATS Project Manager Templates" />
          <meta name="twitter:description" content="Create a professional project manager resume for free in 2026. ATS-optimized templates for PMs worldwide. Download PDF instantly." />
          <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-pm-resume-builder-preview.jpg" />
          <meta name="twitter:image:alt" content="Free Project Manager Resume Builder with ATS Templates" />
          <meta name="twitter:site" content="@PMResumeFree" />
          <meta name="twitter:creator" content="@PMResumeFree" />
          <meta name="theme-color" content="#0052CC" />
          <meta name="msapplication-TileColor" content="#0052CC" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
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
                    "@id": "https://professionalresumefree.com/ats-friendly-project-manager-resume-builder#webpage",
                    "url": "https://professionalresumefree.com/ats-friendly-project-manager-resume-builder",
                    "name": "Free PM Resume Builder 2026 | ATS Project Manager Templates",
                    "description": "Create a professional project manager resume for free in 2026. ATS-optimized templates for PMs worldwide. Download PDF instantly.",
                    "datePublished": "2026-01-01",
                    "dateModified": safeLastModifiedDate,
                    "inLanguage": "en-US",
                    "isPartOf": {
                      "@type": "WebSite",
                      "@id": "https://professionalresumefree.com/#website",
                      "url": "https://professionalresumefree.com",
                      "name": "Professional Project Manager Resume Free",
                      "description": "Free online resume builder for project managers worldwide",
                      "publisher": {
                        "@type": "Organization",
                        "@id": "https://professionalresumefree.com/#organization",
                        "name": "Professional Project Manager Resume Free",
                        "url": "https://professionalresumefree.com",
                        "logo": {
                          "@type": "ImageObject",
                          "url": "https://professionalresumefree.com/logo.png",
                          "width": 512,
                          "height": 512
                        },
                        "sameAs": [
                          "https://twitter.com/PMResumeFree",
                          "https://www.linkedin.com/company/project-manager-resume-free",
                          "https://www.facebook.com/ProjectManagerResumeFree",
                          "https://www.youtube.com/@ProjectManagerResumeFree"
                        ]
                      }
                    },
                    "primaryImageOfPage": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/images/og-pm-resume-builder-preview.jpg",
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
                          "name": "Project Manager Resume Builder",
                          "item": "https://professionalresumefree.com/ats-friendly-project-manager-resume-builder"
                        }
                      ]
                    },
                    "mainEntity": {
                      "@type": "SoftwareApplication",
                      "name": "Project Manager Resume Builder - ATS Optimized Global PM Resume Maker",
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
                        "ratingCount": 35218,
                        "bestRating": 5,
                        "worstRating": 1
                      },
                      "description": "Free online ATS-friendly project management resume builder for PMs worldwide with global templates and metrics.",
                      "featureList": [
                        "Global ATS-Optimized Templates",
                        "Project Metrics Formatting",
                        "One-Click PDF Download",
                        "PM Methodologies Included",
                        "Mobile-Friendly Editor",
                        "No Sign Up Required",
                        "Free Forever"
                      ],
                      "softwareVersion": "2026.1.0",
                      "screenshot": "https://professionalresumefree.com/images/screenshot-pm-resume-builder.jpg",
                      "applicationSuite": "Project Management Career Tools",
                      "countriesSupported": "Global",
                      "fileSize": "Web Application"
                    }
                  },
                  {
                    "@type": "FAQPage",
                    "@id": "https://professionalresumefree.com/ats-friendly-project-manager-resume-builder#faqpage",
                    "mainEntity": faqs.map((faq, index) => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer,
                        "datePublished": safeFaqDates[index] || safeCurrentDate,
                        "author": {
                          "@type": "Person",
                          "name": "Project Manager Resume Builder Support Team"
                        }
                      },
                      "mainEntityOfPage": "https://professionalresumefree.com/ats-friendly-project-manager-resume-builder#webpage"
                    }))
                  },
                  {
                    "@type": "HowTo",
                    "name": "How to Create a Professional Project Manager Resume with Our Free Builder",
                    "description": "Step-by-step guide to create an ATS-optimized project management resume for free",
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
                        "name": "Choose a Project Management Template",
                        "text": "Select from our ATS-optimized project management resume templates designed for IT, Construction, Agile, and global PM roles.",
                        "url": "https://professionalresumefree.com/ats-friendly-project-manager-resume-builder#templates",
                        "image": "https://professionalresumefree.com/images/step1-pm-template.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Enter Your Project Management Experience",
                        "text": "Add your PM experience with budgets, team sizes, methodologies, and project achievements using our guided forms.",
                        "url": "https://professionalresumefree.com/ats-friendly-project-manager-resume-builder#editor",
                        "image": "https://professionalresumefree.com/images/step2-pm-info.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Customize and Optimize",
                        "text": "Use our PM-specific suggestions to improve project metrics and formatting for global ATS compatibility.",
                        "url": "https://professionalresumefree.com/ats-friendly-project-manager-resume-builder#optimize",
                        "image": "https://professionalresumefree.com/images/step3-optimize.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 4,
                        "name": "Download Your PM Resume",
                        "text": "Export your professional project management resume as PDF - completely free, no watermarks.",
                        "url": "https://professionalresumefree.com/ats-friendly-project-manager-resume-builder#download",
                        "image": "https://professionalresumefree.com/images/step4-download.jpg"
                      }
                    ]
                  },
                  {
                    "@type": "Service",
                    "serviceType": "Online Project Management Resume Building Service",
                    "provider": {
                      "@type": "Organization",
                      "name": "Professional Project Manager Resume Free",
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
                      "name": "Free Project Management Resume Building Services",
                      "itemListElement": [
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Project Management ATS Resume Templates"
                          }
                        },
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "PM Resume Editing with Metrics"
                          }
                        }
                      ]
                    },
                    "description": "Free ATS-friendly project management resume builder for PMs worldwide",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD"
                    }
                  },
                  {
                    "@type": "SpeakableSpecification",
                    "cssSelector": [".cf-hero-title", ".cf-hero-subtitle", ".cf-faq-item h3"]
                  },
                  {
                    "@type": "ItemList",
                    "itemListElement": testimonials.map((testimonial, index) => ({
                      "@type": "ListItem",
                      "position": index + 1,
                      "item": {
                        "@type": "Review",
                        "reviewRating": {
                          "@type": "Rating",
                          "ratingValue": 5,
                          "bestRating": 5
                        },
                        "author": {
                          "@type": "Person",
                          "name": testimonial.name
                        },
                        "reviewBody": testimonial.quote,
                        "datePublished": safeReviewDates[index] || safeCurrentDate,
                        "publisher": {
                          "@type": "Organization",
                          "name": "Professional Project Manager Resume Free"
                        },
                        "itemReviewed": {
                          "@type": "SoftwareApplication",
                          "name": "Project Manager Resume Builder - ATS Optimized Global PM Resume Maker",
                          "applicationCategory": "BusinessApplication",
                          "operatingSystem": "Any",
                          "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                          },
                          "description": "Free online ATS-friendly project management resume builder that helps PMs create professional resumes and land global interviews faster.",
                          "url": "https://professionalresumefree.com/ats-friendly-project-manager-resume-builder"
                        }
                      }
                    }))
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
              <Link href="https://professionalresumefree.com" className="cf-breadcrumb-link" prefetch={false}>
                <FiHome className="cf-breadcrumb-icon"/>
                <span className="cf-breadcrumb-text">Home</span>
              </Link>
            </li>
            <li className="cf-breadcrumb-separator">
              <FiChevronRightIcon/>
            </li>
            <li>
              <Link href="/ats-friendly-project-manager-resume-builder" className="cf-breadcrumb-link" prefetch={false}>
                <span className="cf-breadcrumb-text">Free PM Resume Template</span>
              </Link>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="cf-hero">
          <div className="cf-container">
            <div className="cf-hero-content">
              <div className="cf-trust-badge">
                <FiStar className="cf-trust-icon"/>
                <span className="cf-trust-text">
                 Best Free PM Resume Builder 2026
                </span>
              </div>
              
              <h2 className="cf-hero-title">
                Free PM <span className="cf-gradient-text">Resume Builder 2026</span>
              </h2>
              
              <p className="cf-hero-subtitle">
                Create a <strong className="cf-hero-highlight">professional, ATS-optimized project management resume for free in minutes.</strong> Our global PM resume builder ensures your project achievements and metrics get noticed by employers worldwide.
              </p>

              <div className="cf-cta-buttons">
                <button
                  onClick={() => setActiveSection('personal')}
                  className="cf-btn-primary"
                  aria-label="Start building your free project manager resume now—no sign-up required"
                >
                  <span className="cf-btn-text">Start Building Your PM Resume Now</span>
                  <FiArrowRight className="cf-btn-icon" />
                  <div className="cf-btn-pulse"></div>
                </button>
                
                <button
                  onClick={generatePDF}
                  className="cf-btn-secondary"
                  aria-label="Download project manager resume as PDF"
                  disabled={isGeneratingPDF || !hasContent()}
                >
                  <FiDownload className="cf-btn-icon" />
                  <span className="cf-btn-text">Download PM Resume PDF</span>
                </button>
              </div>

              <div className="cf-hero-stats">
                <div className="cf-stat-item">
                  <span className="cf-stat-number">98%</span>
                  <span className="cf-stat-label">ATS Pass Rate</span>
                </div>
                <div className="cf-stat-item">
                  <span className="cf-stat-number">2M+</span>
                  <span className="cf-stat-label">PMs Worldwide</span>
                </div>
              </div>

              <div className="cf-industry-badges">
                <div className="cf-badge-grid">
                  <span className="cf-badge-item"><FiBriefcase/> IT PM</span>
                  <span className="cf-badge-item"><FiTool/> Construction</span>
                  <span className="cf-badge-item"><FiTrendingUp/> Agile</span>
                  <span className="cf-badge-item"><FiBarChart/> Program Mgr</span>
                  <span className="cf-badge-item"><FiTarget/> Scrum Master</span>
                  <span className="cf-badge-item"><FiUsers/> PMO Director</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="cf-layout">
          {/* Preview Section */}
          <div className="cf-preview-section">
            <div className="cf-preview-header">
              <div className="cf-preview-actions">
                <button onClick={() => setShowFullPreview(!showFullPreview)} className="cf-preview-btn">
                  <FiEye /> {showFullPreview ? 'Hide Full Preview' : 'Show Full Preview'}
                </button>
                <button
                  onClick={generatePDF}
                  className="cf-download-btn"
                  disabled={isGeneratingPDF || !hasContent()}
                >
                  <FiDownload />
                  {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
                </button>
              </div>
            </div>

            <div className={`cf-preview-container ${showFullPreview ? 'cf-full-preview' : ''}`}>
              <div className="cf-resume-card">
                <div className="cf-preview-content">
                  <div
                    className="cf-resume-preview"
                    ref={resumeRef}
                  >
                    <ProjectManagerTemplate formData={formData} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="cf-form-section">
            <div className="cf-form-nav">
              {[
                { id: 'personal', label: 'Personal', icon: <FiUser /> },
                { id: 'experience', label: 'PM Experience', icon: <FiBriefcase /> },
                { id: 'projects', label: 'Key Projects', icon: <FiTarget /> },
                { id: 'skills', label: 'Skills & Certs', icon: <FiActivity /> },
                { id: 'education', label: 'Education', icon: <FiBook /> },
                { id: 'settings', label: 'Font Settings', icon: <FiSettings /> },
              ].map((item) => (
                <button
                  key={item.id}
                  className={`cf-nav-btn ${activeSection === item.id ? 'cf-nav-btn-active' : ''}`}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.icon} <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div className="cf-form-content">
              {/* Personal Section */}
              {activeSection === 'personal' && (
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiUser /> Personal Information</h3>
                  <div className="cf-form-card">
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Full Name*
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Smith, PMP" required className="cf-form-input" />
                      </label>
                      <label className="cf-form-label">
                        Email*
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john.smith@example.com" required className="cf-form-input" />
                      </label>
                    </div>
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Phone
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 123-4567" className="cf-form-input" />
                      </label>
                      <label className="cf-form-label">
                        Location
                        <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="City, Country" className="cf-form-input" />
                      </label>
                    </div>
                    <label className="cf-form-label">
                      Nationality / Work Authorization
                      <input type="text" name="nationality" value={formData.nationality} onChange={handleInputChange} placeholder="e.g., US Citizen, EU Work Permit" className="cf-form-input" />
                    </label>
                  </div>

                  <div className="cf-form-card">
                    <label className="cf-form-label">
                      Executive Summary*
                      <textarea
                        name="summary"
                        value={formData.summary}
                        onChange={handleInputChange}
                        placeholder="Results-driven Project Manager with 10+ years of international experience delivering complex IT projects up to $5M budget. PMP-certified professional skilled in Agile, Waterfall, and Hybrid methodologies. Proven track record of delivering projects 15% under budget and 20% ahead of schedule for Fortune 500 clients across North America, Europe, and APAC regions."
                        required
                        className="cf-form-textarea"
                        rows="6"
                      />
                      <div className="cf-char-count">
                        {formData.summary.length}/500 characters
                      </div>
                    </label>
                  </div>

                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title"><FiGlobe /> Professional Links</h4>
                    <p className="cf-section-desc">Add your professional PM profiles (LinkedIn, GitHub, PM Network, etc.)</p>
                    <div className="cf-social-input">
                      <select 
                        value={currentSocialLink.platform} 
                        onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })} 
                        className="cf-form-select"
                      >
                        <option value="">Select Platform</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="GitHub">GitHub</option>
                        <option value="PMNetwork">PMI Network</option>
                        <option value="Portfolio">Project Portfolio</option>
                        <option value="Website">Personal Website</option>
                        <option value="Upwork">Upwork Profile</option>
                      </select>
                      <input 
                        type="url" 
                        placeholder="https://linkedin.com/in/yourprofile" 
                        value={currentSocialLink.url} 
                        onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, url: e.target.value })} 
                        className="cf-form-input" 
                      />
                      <div className="cf-form-actions">
                        <button 
                          type="button" 
                          onClick={addSocialLink} 
                          className="cf-add-btn" 
                          disabled={!currentSocialLink.platform || !currentSocialLink.url}
                        >
                          <FiPlus /> {currentSocialLink.isEditing ? 'Update' : 'Add Link'}
                        </button>
                        {currentSocialLink.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentSocialLink(defaultSocialLink())} 
                            className="cf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="cf-items-list">
                      {formData.socialLinks.length === 0 ? (
                        <p className="cf-empty-msg">No professional links added yet</p>
                      ) : (
                        formData.socialLinks.map((link, i) => (
                          <div key={i} className="cf-list-item">
                            <div className="cf-item-info">
                              <span className="cf-item-platform">{link.platform}</span>
                              <span className="cf-item-url">{formatSocialUrl(link.url)}</span>
                            </div>
                            <div className="cf-item-actions">
                              <button onClick={() => editSocialLink(i)} className="cf-edit-btn" aria-label={`Edit ${link.platform} link`}><FiEdit2 /></button>
                              <button onClick={() => deleteSocialLink(i)} className="cf-delete-btn" aria-label={`Delete ${link.platform} link`}><FiTrash2 /></button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Project Management Experience Section */}
              {activeSection === 'experience' && (
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiBriefcase /> Project Management Experience</h3>
                  <p className="cf-section-desc">List your PM positions in reverse chronological order with project metrics</p>
                  
                  <div className="cf-form-card">
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Position Title*
                        <input 
                          value={currentExperience.position} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                          placeholder="Senior Project Manager" 
                          required 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        Company/Organization*
                        <input 
                          value={currentExperience.employer} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, employer: e.target.value })} 
                          placeholder="Global Tech Corporation" 
                          required 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="cf-form-label">
                      Industry / Sector
                      <input 
                        value={currentExperience.industry} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, industry: e.target.value })} 
                        placeholder="Information Technology / Construction / Healthcare" 
                        className="cf-form-input" 
                      />
                    </label>
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Start Date*
                        <input 
                          type="text" 
                          placeholder="Month Year (e.g., January 2020)" 
                          value={currentExperience.startDate} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, startDate: e.target.value })} 
                          required 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        End Date
                        <input 
                          type="text" 
                          placeholder="Month Year or Present" 
                          value={currentExperience.endDate} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, endDate: e.target.value })} 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Project Budget
                        <input 
                          type="text" 
                          placeholder="$2.5M" 
                          value={currentExperience.budget} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, budget: e.target.value })} 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        Team Size Managed
                        <input 
                          type="text" 
                          placeholder="12 team members" 
                          value={currentExperience.teamSize} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, teamSize: e.target.value })} 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="cf-form-label">
                      Key Responsibilities & Achievements*
                      <textarea 
                        value={currentExperience.description} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} 
                        placeholder="• Led $3.2M global ERP implementation project across 5 countries, delivering 3 months ahead of schedule
• Managed cross-functional team of 15, improving team productivity by 25% through Agile practices
• Reduced project costs by 18% through vendor negotiations and process optimization
• Implemented risk management framework that decreased project risks by 40%
• Successfully delivered 12+ projects on time and under budget with 95% client satisfaction"
                        required 
                        className="cf-form-textarea" 
                        rows="8" 
                      />
                      <div className="cf-char-count">
                        {currentExperience.description.length}/2000 characters
                      </div>
                    </label>
                    <div className="cf-form-actions">
                      <button 
                        type="button" 
                        onClick={addExperience} 
                        className="cf-add-btn" 
                        disabled={!currentExperience.position || !currentExperience.employer || !currentExperience.startDate}
                      >
                        <FiPlus /> {currentExperience.isEditing ? 'Update PM Experience' : 'Add PM Experience'}
                      </button>
                      {currentExperience.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentExperience(defaultExperience())} 
                          className="cf-cancel-btn"
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title">Your Project Management Experience</h4>
                    {formData.experience.length === 0 ? (
                      <p className="cf-empty-msg">No project management experience added yet</p>
                    ) : (
                      <div className="cf-items-list">
                        {formData.experience.map((exp, i) => (
                          <div key={i} className="cf-list-item">
                            <div className="cf-item-content">
                              <div className="cf-item-header">
                                <strong className="cf-item-title">{exp.position}</strong>
                                <span className="cf-item-subtitle">at {exp.employer}</span>
                              </div>
                              <div className="cf-item-meta">
                                <span>{exp.startDate} – {exp.endDate || 'Present'}</span>
                                {exp.industry && <span>{exp.industry}</span>}
                                {exp.budget && <span>Budget: {exp.budget}</span>}
                                {exp.teamSize && <span>Team: {exp.teamSize}</span>}
                              </div>
                              <div className="cf-item-desc">
                                {exp.description.split('\n').filter(l => l.trim()).map((line, j) => (
                                  <p key={j} className="cf-bullet-point">• {line}</p>
                                ))}
                              </div>
                            </div>
                            <div className="cf-item-actions">
                              <button onClick={() => editExperience(i)} className="cf-edit-btn" aria-label={`Edit ${exp.position} experience`}><FiEdit2 /></button>
                              <button onClick={() => deleteExperience(i)} className="cf-delete-btn" aria-label={`Delete ${exp.position} experience`}><FiTrash2 /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Key Projects Section */}
              {activeSection === 'projects' && (
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiTarget /> Key Projects</h3>
                  <p className="cf-section-desc">Highlight significant projects with measurable outcomes</p>
                  
                  <div className="cf-form-card">
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Project Name*
                        <input 
                          value={currentProject.name} 
                          onChange={(e) => setCurrentProject({ ...currentProject, name: e.target.value })} 
                          placeholder="Global ERP Implementation" 
                          required 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        Client / Organization
                        <input 
                          value={currentProject.client} 
                          onChange={(e) => setCurrentProject({ ...currentProject, client: e.target.value })} 
                          placeholder="Fortune 500 Client" 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Your Role
                        <input 
                          value={currentProject.role} 
                          onChange={(e) => setCurrentProject({ ...currentProject, role: e.target.value })} 
                          placeholder="Lead Project Manager" 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        Project Duration
                        <input 
                          value={currentProject.duration} 
                          onChange={(e) => setCurrentProject({ ...currentProject, duration: e.target.value })} 
                          placeholder="18 months (Jan 2022 - Jun 2023)" 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="cf-form-label">
                      Key Outcomes & Achievements*
                      <input 
                        value={currentProject.outcome} 
                        onChange={(e) => setCurrentProject({ ...currentProject, outcome: e.target.value })} 
                        placeholder="Delivered 15% under budget, improved efficiency by 30%" 
                        className="cf-form-input" 
                      />
                    </label>
                    <div className="cf-form-actions">
                      <button 
                        type="button" 
                        onClick={addProject} 
                        className="cf-add-btn" 
                        disabled={!currentProject.name.trim()}
                      >
                        <FiPlus /> {currentProject.isEditing ? 'Update Project' : 'Add Project'}
                      </button>
                      {currentProject.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentProject(defaultProject())} 
                          className="cf-cancel-btn"
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title">Your Key Projects</h4>
                    {formData.projects.length === 0 ? (
                      <p className="cf-empty-msg">No key projects added yet</p>
                    ) : (
                      <div className="cf-items-list">
                        {formData.projects.map((proj, i) => (
                          <div key={i} className="cf-list-item">
                            <div className="cf-item-content">
                              <div className="cf-item-header">
                                <strong className="cf-item-title">{proj.name}</strong>
                                {proj.client && <span className="cf-item-subtitle"> • {proj.client}</span>}
                              </div>
                              <div className="cf-item-meta">
                                {proj.role && <span>{proj.role}</span>}
                                {proj.duration && <span>{proj.duration}</span>}
                                {proj.outcome && <span>{proj.outcome}</span>}
                              </div>
                            </div>
                            <div className="cf-item-actions">
                              <button onClick={() => editProject(i)} className="cf-edit-btn" aria-label={`Edit ${proj.name}`}><FiEdit2 /></button>
                              <button onClick={() => deleteProject(i)} className="cf-delete-btn" aria-label={`Delete ${proj.name}`}><FiTrash2 /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Skills & Certifications Section */}
              {activeSection === 'skills' && (
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiActivity /> Skills & Certifications</h3>
                  
                  {/* Skills */}
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title">Project Management Skills</h4>
                    <p className="cf-section-desc">List your PM skills categorized by expertise</p>
                    <div className="cf-skills-input">
                      <div className="cf-form-group">
                        <label className="cf-form-label">
                          Skill Name*
                          <input 
                            value={currentSkill.name} 
                            onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })} 
                            placeholder="Risk Management" 
                            className="cf-form-input" 
                          />
                        </label>
                        <label className="cf-form-label">
                          Category
                          <input 
                            value={currentSkill.category} 
                            onChange={(e) => setCurrentSkill({ ...currentSkill, category: e.target.value })} 
                            placeholder="Technical / Soft / Leadership" 
                            className="cf-form-input" 
                          />
                        </label>
                      </div>
                      <label className="cf-form-label">
                        Proficiency Level
                        <input 
                          value={currentSkill.proficiency} 
                          onChange={(e) => setCurrentSkill({ ...currentSkill, proficiency: e.target.value })} 
                          placeholder="Expert / Advanced / Intermediate" 
                          className="cf-form-input" 
                        />
                      </label>
                      <div className="cf-form-actions">
                        <button 
                          type="button" 
                          onClick={addSkill} 
                          className="cf-add-btn" 
                          disabled={!currentSkill.name.trim()}
                        >
                          <FiPlus /> {currentSkill.isEditing ? 'Update Skill' : 'Add Skill'}
                        </button>
                        {currentSkill.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentSkill(defaultSkill())} 
                            className="cf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="cf-items-list">
                      {formData.skills.map((s, i) => (
                        <div key={i} className="cf-list-item">
                          <div>
                            <strong>{s.name}</strong>
                            {s.category && ` (${s.category})`}
                            {s.proficiency && ` – ${s.proficiency}`}
                          </div>
                          <div className="cf-item-actions">
                            <button onClick={() => editSkill(i)} className="cf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteSkill(i)} className="cf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.skills.length === 0 && <p className="cf-empty-msg">No skills added yet</p>}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title"><FiShield /> Professional Certifications</h4>
                    <p className="cf-section-desc">Add your PM certifications and credentials</p>
                    <div className="cf-skills-input">
                      <div className="cf-form-group">
                        <label className="cf-form-label">
                          Certification Name*
                          <input 
                            value={currentCertification.name} 
                            onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                            placeholder="Project Management Professional (PMP)" 
                            className="cf-form-input" 
                          />
                        </label>
                        <label className="cf-form-label">
                          Issuing Organization
                          <input 
                            value={currentCertification.issuer} 
                            onChange={(e) => setCurrentCertification({ ...currentCertification, issuer: e.target.value })} 
                            placeholder="Project Management Institute (PMI)" 
                            className="cf-form-input" 
                          />
                        </label>
                      </div>
                      <div className="cf-form-group">
                        <label className="cf-form-label">
                          Certification Number
                          <input 
                            value={currentCertification.certNumber} 
                            onChange={(e) => setCurrentCertification({ ...currentCertification, certNumber: e.target.value })} 
                            placeholder="PMP1234567" 
                            className="cf-form-input" 
                          />
                        </label>
                        <label className="cf-form-label">
                          Expiry Date
                          <input 
                            value={currentCertification.expiryDate} 
                            onChange={(e) => setCurrentCertification({ ...currentCertification, expiryDate: e.target.value })} 
                            placeholder="Month Year" 
                            className="cf-form-input" 
                          />
                        </label>
                      </div>
                      <div className="cf-form-actions">
                        <button 
                          type="button" 
                          onClick={addCertification} 
                          className="cf-add-btn" 
                          disabled={!currentCertification.name.trim()}
                        >
                          <FiPlus /> {currentCertification.isEditing ? 'Update Certification' : 'Add Certification'}
                        </button>
                        {currentCertification.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentCertification(defaultCertification())} 
                            className="cf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="cf-items-list">
                      {formData.certifications.map((cert, i) => (
                        <div key={i} className="cf-list-item">
                          <div>
                            <strong>{cert.name}</strong>
                            {cert.issuer && ` – ${cert.issuer}`}
                            {cert.certNumber && ` (#${cert.certNumber})`}
                            {cert.expiryDate && ` – Expires: ${cert.expiryDate}`}
                          </div>
                          <div className="cf-item-actions">
                            <button onClick={() => editCertification(i)} className="cf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteCertification(i)} className="cf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.certifications.length === 0 && <p className="cf-empty-msg">No certifications added yet</p>}
                    </div>
                  </div>

                  {/* Methodologies & Tools */}
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title">Methodologies & Tools</h4>
                    <p className="cf-section-desc">List project management methodologies and software proficiency</p>
                    <div className="cf-skills-input">
                      <div className="cf-form-group">
                        <label className="cf-form-label">
                          Methodology / Tool*
                          <input 
                            value={currentMethodology.name} 
                            onChange={(e) => setCurrentMethodology({ ...currentMethodology, name: e.target.value })} 
                            placeholder="Agile Scrum / MS Project / JIRA" 
                            className="cf-form-input" 
                          />
                        </label>
                        <label className="cf-form-label">
                          Proficiency Level
                          <input 
                            value={currentMethodology.level} 
                            onChange={(e) => setCurrentMethodology({ ...currentMethodology, level: e.target.value })} 
                            placeholder="Expert / Advanced" 
                            className="cf-form-input" 
                          />
                        </label>
                      </div>
                      <div className="cf-form-actions">
                        <button 
                          type="button" 
                          onClick={addMethodology} 
                          className="cf-add-btn" 
                          disabled={!currentMethodology.name.trim()}
                        >
                          <FiPlus /> {currentMethodology.isEditing ? 'Update' : 'Add Methodology'}
                        </button>
                        {currentMethodology.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentMethodology(defaultMethodology())} 
                            className="cf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="cf-items-list">
                      {formData.methodologies.map((m, i) => (
                        <div key={i} className="cf-list-item">
                          <div>
                            {m.name}{m.level && ` (${m.level})`}
                          </div>
                          <div className="cf-item-actions">
                            <button onClick={() => editMethodology(i)} className="cf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteMethodology(i)} className="cf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.methodologies.length === 0 && <p className="cf-empty-msg">No methodologies added yet</p>}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title">Languages</h4>
                    <p className="cf-section-desc">List languages you speak for global project coordination</p>
                    <div className="cf-skills-input">
                      <div className="cf-form-group">
                        <label className="cf-form-label">
                          Language*
                          <input 
                            value={currentLanguage.name} 
                            onChange={(e) => setCurrentLanguage({ ...currentLanguage, name: e.target.value })} 
                            placeholder="English" 
                            className="cf-form-input" 
                          />
                        </label>
                        <label className="cf-form-label">
                          Proficiency Level
                          <input 
                            value={currentLanguage.proficiency} 
                            onChange={(e) => setCurrentLanguage({ ...currentLanguage, proficiency: e.target.value })} 
                            placeholder="Native / Fluent / Business" 
                            className="cf-form-input" 
                          />
                        </label>
                      </div>
                      <div className="cf-form-actions">
                        <button 
                          type="button" 
                          onClick={addLanguage} 
                          className="cf-add-btn" 
                          disabled={!currentLanguage.name.trim()}
                        >
                          <FiPlus /> {currentLanguage.isEditing ? 'Update Language' : 'Add Language'}
                        </button>
                        {currentLanguage.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentLanguage(defaultLanguage())} 
                            className="cf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="cf-items-list">
                      {formData.languages.map((l, i) => (
                        <div key={i} className="cf-list-item">
                          <div>
                            {l.name}{l.proficiency && ` (${l.proficiency})`}
                          </div>
                          <div className="cf-item-actions">
                            <button onClick={() => editLanguage(i)} className="cf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteLanguage(i)} className="cf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.languages.length === 0 && <p className="cf-empty-msg">No languages added yet</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Education Section */}
              {activeSection === 'education' && (
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiBook /> Education</h3>
                  <p className="cf-section-desc">List your academic qualifications and relevant training</p>
                  
                  <div className="cf-form-card">
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Institution*
                        <input 
                          value={currentEducation.institution} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                          placeholder="Harvard Business School" 
                          required 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        Degree/Certification*
                        <input 
                          value={currentEducation.degree} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} 
                          placeholder="Master of Business Administration (MBA)" 
                          required 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="cf-form-label">
                      Specialization / Concentration
                      <input 
                        value={currentEducation.specialization} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, specialization: e.target.value })} 
                        placeholder="Project Management, Operations" 
                        className="cf-form-input" 
                      />
                    </label>
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Start Date
                        <input 
                          type="text" 
                          placeholder="Month Year" 
                          value={currentEducation.startDate} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, startDate: e.target.value })} 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        End Date / Expected
                        <input 
                          type="text" 
                          placeholder="Month Year" 
                          value={currentEducation.endDate} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, endDate: e.target.value })} 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <div className="cf-form-actions">
                      <button 
                        type="button" 
                        onClick={addEducation} 
                        className="cf-add-btn" 
                        disabled={!currentEducation.institution || !currentEducation.degree}
                      >
                        <FiPlus /> {currentEducation.isEditing ? 'Update Education' : 'Add Education'}
                      </button>
                      {currentEducation.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentEducation(defaultEducation())} 
                          className="cf-cancel-btn"
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title">Your Education</h4>
                    {formData.education.length === 0 ? (
                      <p className="cf-empty-msg">No education added yet</p>
                    ) : (
                      <div className="cf-items-list">
                        {formData.education.map((edu, i) => (
                          <div key={i} className="cf-list-item">
                            <div className="cf-item-content">
                              <div className="cf-item-header">
                                <strong className="cf-item-title">{edu.degree}</strong>
                                {edu.specialization && <span className="cf-item-subtitle"> – {edu.specialization}</span>}
                              </div>
                              <div className="cf-item-meta">
                                <span>{edu.institution}</span>
                                <span>{edu.startDate} – {edu.endDate || 'Present'}</span>
                              </div>
                            </div>
                            <div className="cf-item-actions">
                              <button onClick={() => editEducation(i)} className="cf-edit-btn" aria-label={`Edit ${edu.degree}`}><FiEdit2 /></button>
                              <button onClick={() => deleteEducation(i)} className="cf-delete-btn" aria-label={`Delete ${edu.degree}`}><FiTrash2 /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Font Settings Section */}
              {activeSection === 'settings' && (
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiSettings /> Font Size Settings</h3>
                  <p className="cf-section-desc">Customize font sizes for your PM resume PDF. All sizes are in points (pt).</p>
                  
                  <div className="cf-form-card">
                    <div className="cf-font-grid">
                      <div className="cf-font-control">
                        <label className="cf-font-label">
                          <span>Name</span>
                          <span className="cf-font-value">{fontSizes.name}pt</span>
                        </label>
                        <input 
                          type="range" 
                          min="8" 
                          max="24" 
                          value={fontSizes.name}
                          onChange={(e) => handleFontSizeChange('name', e.target.value)}
                          className="cf-font-slider"
                        />
                      </div>
                      
                      <div className="cf-font-control">
                        <label className="cf-font-label">
                          <span>Section Titles</span>
                          <span className="cf-font-value">{fontSizes.sectionTitle}pt</span>
                        </label>
                        <input 
                          type="range" 
                          min="6" 
                          max="18" 
                          value={fontSizes.sectionTitle}
                          onChange={(e) => handleFontSizeChange('sectionTitle', e.target.value)}
                          className="cf-font-slider"
                        />
                      </div>
                      
                      <div className="cf-font-control">
                        <label className="cf-font-label">
                          <span>Job Titles</span>
                          <span className="cf-font-value">{fontSizes.jobTitle}pt</span>
                        </label>
                        <input 
                          type="range" 
                          min="6" 
                          max="16" 
                          value={fontSizes.jobTitle}
                          onChange={(e) => handleFontSizeChange('jobTitle', e.target.value)}
                          className="cf-font-slider"
                        />
                      </div>
                      
                      <div className="cf-font-control">
                        <label className="cf-font-label">
                          <span>Degrees</span>
                          <span className="cf-font-value">{fontSizes.degree}pt</span>
                        </label>
                        <input 
                          type="range" 
                          min="6" 
                          max="16" 
                          value={fontSizes.degree}
                          onChange={(e) => handleFontSizeChange('degree', e.target.value)}
                          className="cf-font-slider"
                        />
                      </div>
                      
                      <div className="cf-font-control">
                        <label className="cf-font-label">
                          <span>Company/Institution Names</span>
                          <span className="cf-font-value">{fontSizes.institution}pt</span>
                        </label>
                        <input 
                          type="range" 
                          min="6" 
                          max="14" 
                          value={fontSizes.institution}
                          onChange={(e) => handleFontSizeChange('institution', e.target.value)}
                          className="cf-font-slider"
                        />
                      </div>
                      
                      <div className="cf-font-control">
                        <label className="cf-font-label">
                          <span>Institution Dates</span>
                          <span className="cf-font-value">{fontSizes.institutionDate}pt</span>
                        </label>
                        <input 
                          type="range" 
                          min="4" 
                          max="12" 
                          value={fontSizes.institutionDate}
                          onChange={(e) => handleFontSizeChange('institutionDate', e.target.value)}
                          className="cf-font-slider"
                        />
                      </div>
                      
                      <div className="cf-font-control">
                        <label className="cf-font-label">
                          <span>Regular Text</span>
                          <span className="cf-font-value">{fontSizes.regularText}pt</span>
                        </label>
                        <input 
                          type="range" 
                          min="6" 
                          max="14" 
                          value={fontSizes.regularText}
                          onChange={(e) => handleFontSizeChange('regularText', e.target.value)}
                          className="cf-font-slider"
                        />
                      </div>
                      
                      <div className="cf-font-control">
                        <label className="cf-font-label">
                          <span>Bullet Points</span>
                          <span className="cf-font-value">{fontSizes.bulletText}pt</span>
                        </label>
                        <input 
                          type="range" 
                          min="6" 
                          max="14" 
                          value={fontSizes.bulletText}
                          onChange={(e) => handleFontSizeChange('bulletText', e.target.value)}
                          className="cf-font-slider"
                        />
                      </div>
                      
                      <div className="cf-font-control">
                        <label className="cf-font-label">
                          <span>Contact Info</span>
                          <span className="cf-font-value">{fontSizes.contactInfo}pt</span>
                        </label>
                        <input 
                          type="range" 
                          min="6" 
                          max="12" 
                          value={fontSizes.contactInfo}
                          onChange={(e) => handleFontSizeChange('contactInfo', e.target.value)}
                          className="cf-font-slider"
                        />
                      </div>

                      <div className="cf-font-control">
                        <label className="cf-font-label">
                          <span>Skills Text</span>
                          <span className="cf-font-value">{fontSizes.skillText}pt</span>
                        </label>
                        <input 
                          type="range" 
                          min="6" 
                          max="12" 
                          value={fontSizes.skillText}
                          onChange={(e) => handleFontSizeChange('skillText', e.target.value)}
                          className="cf-font-slider"
                        />
                      </div>

                      <div className="cf-font-control">
                        <label className="cf-font-label">
                          <span>Certification Text</span>
                          <span className="cf-font-value">{fontSizes.certText}pt</span>
                        </label>
                        <input 
                          type="range" 
                          min="6" 
                          max="14" 
                          value={fontSizes.certText}
                          onChange={(e) => handleFontSizeChange('certText', e.target.value)}
                          className="cf-font-slider"
                        />
                      </div>

                      <div className="cf-font-control">
                        <label className="cf-font-label">
                          <span>Project Metrics</span>
                          <span className="cf-font-value">{fontSizes.metricText}pt</span>
                        </label>
                        <input 
                          type="range" 
                          min="5" 
                          max="12" 
                          value={fontSizes.metricText}
                          onChange={(e) => handleFontSizeChange('metricText', e.target.value)}
                          className="cf-font-slider"
                        />
                      </div>
                    </div>
                    
                    <button 
                      type="button" 
                      onClick={resetFontSizes}
                      className="cf-reset-btn"
                    >
                      Reset to Default Font Sizes
                    </button>
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
              <h2 id="faq-title">Frequently Asked Questions</h2>
              <p>
                Everything you need to know about creating professional project management resumes with our tool.
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
              <h2 className="cf-cta-title" id="cta-title">Ready to Advance Your Project Management Career?</h2>
              <p className="cf-cta-subtitle">
                Join 2 million+ project managers who landed their dream global roles with our free ATS-friendly PM resume builder.
              </p>
              <div className="cf-cta-btn-wrap">
                <button
                  onClick={() => setActiveSection('personal')}
                  className="cf-cta-btn"
                  aria-label="Create your free project manager resume now—no sign-up required"
                >
                  <span className="cf-cta-btn-text">Create Your Free PM Resume Now</span>
                  <FiArrowRight className="cf-cta-btn-icon" />
                </button>
              </div>
              <div className="cf-cta-guarantee">
                <FiCheck className="cf-guarantee-icon" />
                <span className="cf-guarantee-text">No credit card required • Free forever • Download in minutes • ATS Optimized for Global Hiring</span>
              </div>
            </div>
          </div>
        </section>

        {/* Full Preview Modal */}
        {showFullPreview && (
          <div className="cf-modal" onClick={() => setShowFullPreview(false)}>
            <div className="cf-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="cf-modal-header">
                <h3>Full Project Manager Resume Preview</h3>
                <button className="cf-close-btn" onClick={() => setShowFullPreview(false)}><FiX /></button>
              </div>
              <div className="cf-modal-pages">
                <div className="cf-modal-page">
                  <ProjectManagerTemplate formData={formData} />
                </div>
              </div>
            </div>
          </div>
        )}

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

  // Breadcrumb data for structured data
  const breadcrumbData = [
    { name: 'Home', item: 'https://professionalresumefree.com/' },
    { name: 'Project Manager Resume Builder', item: 'https://professionalresumefree.com/ats-friendly-project-manager-resume-builder' }
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
    revalidate: 86400
  };
}

export default ProjectManagerResume;