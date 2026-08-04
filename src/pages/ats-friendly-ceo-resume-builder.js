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
  FiTrendingUp,
  FiAward,
  FiGlobe,
  FiDownload,
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiX,
  FiEye,
  FiCheck,
  FiStar,
  FiArrowRight,
  FiClock,
  FiHome,
  FiChevronRight as FiChevronRightIcon,
  FiTarget,
  FiTool,
  FiBarChart,
  FiLayers,
  FiDollarSign,
  FiUsers,
  FiSettings,
  FiThumbsUp,
  FiZap,
  FiActivity,
  FiFlag,
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
  .cf-professional-title { font-weight: 400; margin: 0 0 4pt; color: #333333; }
  .cf-contact-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 4pt; color: #495057; margin-top: 3pt; }
  .cf-contact-item { display: flex; align-items: center; gap: 2pt; }
  .cf-contact-separator { color: #adb5bd; }
  .cf-section { margin-bottom: 8pt; page-break-inside: avoid; }
  .cf-section-title { text-transform: uppercase; letter-spacing: 0.5pt; margin: 0 0 3pt; padding-bottom: 1pt; border-bottom: 0.5pt solid #000000; color: #000000; font-weight: 700; }
  .cf-summary-text { margin: 0; text-align: justify; line-height: 1.3; }
  .cf-experience-item, .cf-education-item { margin-bottom: 6pt; page-break-inside: avoid; }
  .cf-experience-header h3 { font-weight: 700; margin: 0 0 1.5pt; color: #000000; }
  .cf-company { color: #495057; margin: 0 0 3pt; font-style: italic; }
  .cf-date { color: #6c757d; margin: 0 0 3pt; }
  .cf-achievement-title { font-weight: 700; margin: 4pt 0 2pt; color: #000000; text-transform: uppercase; font-size: 8pt; }
  .cf-institution-text { color: #495057; }
  .cf-institution-date { color: #6c757d; }
  .cf-bullet-list { margin: 3pt 0 0; padding-left: 8pt; list-style-type: disc; }
  .cf-bullet-list li { margin-bottom: 2pt; text-align: justify; line-height: 1.25; }
  .cf-skills-list { display: flex; flex-wrap: wrap; gap: 3pt; list-style: none; padding: 0; margin: 3pt 0 0; }
  .cf-skills-list li { background: #f8f9fa; padding: 1.5pt 4pt; border-radius: 1.5pt; border: 0.5pt solid #dee2e6; }
  .cf-expertise-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8pt; }
  .cf-expertise-category { margin-bottom: 4pt; }
  .cf-expertise-category-title { font-weight: 700; margin: 0 0 3pt; color: #000000; text-transform: uppercase; font-size: 8pt; }
  .cf-cert-item, .cf-board-item { margin-bottom: 3pt; line-height: 1.25; }
  .cf-item-metrics { color: #495057; margin-top: 4px; font-style: italic; }

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
  .cf-social-input, .cf-skills-input, .cf-expertise-input { display: flex; flex-direction: column; gap: 16px; width: 100%; }
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
  @media (max-width: 768px) { :root { --cf-margin-desktop: 24px; --cf-section-gap: 60px; } .cf-hero { padding: 80px 0 40px; } .cf-hero-title { font-size: 36px; } .cf-hero-subtitle { font-size: 14px; } .cf-cta-buttons { flex-direction: column; align-items: center; gap: 12px; } .cf-btn-primary, .cf-btn-secondary, .cf-preview-btn, .cf-download-btn, .cf-cta-btn { width: 100%; justify-content: center; } .cf-layout { padding: 40px var(--cf-margin-desktop); gap: 24px; } .cf-preview-container { padding: 16px; } .cf-resume-preview { width: 100%; min-height: auto; padding: 8mm 10mm; } .cf-form-nav { gap: 6px; padding: 12px; } .cf-nav-btn { min-width: 80px; flex: 1 1 calc(50% - 6px); padding: 10px 14px; font-size: 11px; } .cf-nav-btn span { display: none; } .cf-form-card { padding: 16px; } .cf-form-group { grid-template-columns: 1fr; } .cf-hero-stats { grid-template-columns: repeat(2, 1fr); gap: 16px; } .cf-badge-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; } .cf-expertise-grid { grid-template-columns: 1fr; } .cf-faq-grid { grid-template-columns: 1fr; } .cf-faq-section, .cf-cta-section { padding: 60px var(--cf-margin-mobile); } .cf-section-header h2, .cf-cta-title { font-size: 28px; } .cf-modal-content { margin: 0; border-radius: 0; max-height: 100vh; width: 100%; } .cf-modal-page { width: 100%; height: auto; min-height: 400px; } .cf-modal-page .cf-universal-template { padding: 8mm 12mm; } .cf-font-grid { grid-template-columns: 1fr 1fr; } .cf-list-item { flex-direction: column; gap: 12px; } .cf-item-actions { margin-left: 0; align-self: flex-end; } .cf-share-card { margin: 0 16px; padding: 24px 20px; } }
  @media (max-width: 480px) { :root { --cf-margin-desktop: 16px; --cf-section-gap: 48px; } .cf-hero-title { font-size: 28px; } .cf-hero-subtitle { font-size: 13px; } .cf-hero-stats, .cf-badge-grid { grid-template-columns: 1fr; } .cf-stat-number { font-size: 2rem; } .cf-layout { padding: 32px var(--cf-margin-desktop); } .cf-resume-preview { padding: 6mm 8mm; } .cf-nav-btn { min-width: 60px; flex: 1 1 calc(50% - 6px); padding: 8px 10px; } .cf-form-card { padding: 12px; } .cf-form-section-title { font-size: 20px; } .cf-sub-section-title { font-size: 16px; } .cf-font-grid { grid-template-columns: 1fr; } .cf-faq-item { padding: 20px; } .cf-faq-question { font-size: 18px; } .cf-section-header h2, .cf-cta-title { font-size: 24px; } .cf-cta-btn { padding: 16px 32px; font-size: 14px; } .cf-cta-guarantee { padding: 12px 20px; flex-wrap: wrap; justify-content: center; } .cf-guarantee-text { font-size: 12px; } .cf-modal-header { padding: 16px 20px; } .cf-modal-header h3 { font-size: 16px; } .cf-modal-pages { padding: 16px; } .cf-modal-page .cf-universal-template { padding: 6mm 8mm; } .cf-share-headline { font-size: 20px; } .cf-share-body { font-size: 13px; } }
  @media (max-width: 360px) { .cf-hero-title { font-size: 24px; } .cf-btn-primary, .cf-btn-secondary { padding: 12px 20px; font-size: 12px; } }
  @media print { .cf-resume-builder, .cf-layout, .cf-preview-section, .cf-form-section, .cf-faq-section, .cf-cta-section, .cf-hero, .cf-breadcrumb, .cf-modal { display: none !important; } .cf-resume-preview { display: block !important; box-shadow: none !important; margin: 0 !important; padding: 10mm 15mm !important; width: 100% !important; height: auto !important; page-break-inside: avoid; background: #ffffff !important; border: none !important; } .cf-universal-template, .cf-section { page-break-inside: avoid; } }
`;

const CeoResume = ({ seoData, buildTimestamp }) => {
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

  const defaultExperience = () => ({ employer: '', position: '', location: '', startDate: '', endDate: '', description: '', achievements: '', isEditing: false, editIndex: null });
  const defaultEducation = () => ({ institution: '', degree: '', program: '', location: '', startDate: '', endDate: '', honors: '', isEditing: false, editIndex: null });
  const defaultExpertise = () => ({ name: '', category: '', isEditing: false, editIndex: null });
  const defaultCertification = () => ({ name: '', issuingAuthority: '', year: '', isEditing: false, editIndex: null });
  const defaultBoardPosition = () => ({ organization: '', position: '', startDate: '', endDate: '', isEditing: false, editIndex: null });
  const defaultAchievement = () => ({ title: '', description: '', metrics: '', year: '', isEditing: false, editIndex: null });
  const defaultPublication = () => ({ title: '', publisher: '', year: '', isEditing: false, editIndex: null });
  const defaultSpeakingEngagement = () => ({ event: '', organization: '', year: '', isEditing: false, editIndex: null });
  const defaultSocialLink = () => ({ platform: '', url: '', isEditing: false, editIndex: null });

  const [formData, setFormData] = useState({ fullName: '', title: '', email: '', phone: '', address: '', summary: '', experience: [], education: [], expertise: [], certifications: [], boardPositions: [], achievements: [], publications: [], speakingEngagements: [], socialLinks: [] });
  const [fontSizes, setFontSizes] = useState({ name: 16, title: 10, sectionTitle: 10, contactInfo: 7, jobTitle: 10, company: 8, degree: 9, institution: 8, date: 7, regularText: 8, bulletText: 8, skillText: 8, achievementText: 9 });
  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentExpertise, setCurrentExpertise] = useState(defaultExpertise());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentBoardPosition, setCurrentBoardPosition] = useState(defaultBoardPosition());
  const [currentAchievement, setCurrentAchievement] = useState(defaultAchievement());
  const [currentPublication, setCurrentPublication] = useState(defaultPublication());
  const [currentSpeakingEngagement, setCurrentSpeakingEngagement] = useState(defaultSpeakingEngagement());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());
  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);

  // Testimonials for Structured Data
  const testimonials = [
    {
      quote: "This executive resume builder helped me land a CEO position at a Fortune 500 company. The strategic focus and board-level formatting made all the difference.",
      metric: "CEO Position Secured in 45 Days",
      name: "Michael R.",
      role: "Chief Executive Officer",
      company: "Fortune 500 Tech Company"
    },
    {
      quote: "Finally a resume tool that understands C-suite metrics. Quantified my achievements properly and impressed the board interview committee.",
      metric: "25% Compensation Increase",
      name: "Sarah K.",
      role: "COO",
      company: "Global Manufacturing Corp"
    },
    {
      quote: "As an aspiring board member, the director-level template showcased my governance experience perfectly. Landed my first board seat within 3 months.",
      metric: "First Public Board Appointment",
      name: "David P.",
      role: "Independent Director",
      company: "NYSE Listed Company"
    },
    {
      quote: "The executive summary templates are exceptional. Recruiters told me it was the most polished CEO resume they'd ever seen.",
      metric: "5 Board Interviews in 2 Weeks",
      name: "Jessica L.",
      role: "President & CEO",
      company: "Healthcare Organization"
    },
    {
      quote: "Turnaround specialists need specific metrics - this builder helped me showcase $500M in value creation perfectly.",
      metric: "$500M Value Creation Highlighted",
      name: "Robert T.",
      role: "Turnaround CEO",
      company: "Private Equity Portfolio"
    },
    {
      quote: "International executive roles require sophisticated formatting. This tool delivered a globally-recognized executive CV.",
      metric: "Global CEO Role Secured",
      name: "Amanda R.",
      role: "Managing Director EMEA",
      company: "Multinational Corporation"
    }
  ];

  const faqs = [
    { question: "Is this executive resume builder truly free for C-suite professionals?", answer: "Yes, our executive resume builder is completely free with no hidden costs. Create, edit, and download your professional CEO/C-suite resume in PDF format without any payment required. We believe in empowering business leaders with professional tools." },
    { question: "What makes this builder different for executive-level resumes?", answer: "Our executive resume builder is specifically designed for C-suite professionals with board-level formatting, strategic focus areas, achievement quantification, and proper executive summary structuring that search committees and boards expect." },
    { question: "Can I download my executive resume as PDF without creating an account?", answer: "Absolutely! Download your professional executive resume in PDF format without creating an account. Everything is completely free and accessible immediately for CEOs, board members, and senior executives." },
    { question: "How many executive resume templates are available?", answer: "We offer professionally designed executive resume templates for CEOs, CFOs, COOs, board directors, managing directors, and all C-suite positions. All templates feature board-level formatting and strategic presentation." },
    { question: "How does your executive resume builder work?", answer: "Our builder uses executive-optimized templates with proper C-suite terminology formatting. We guide you to highlight strategic leadership, P&L experience, board governance, and quantifiable achievements that board search committees look for." },
    { question: "Can I edit my executive resume after downloading it?", answer: "Yes, you can always come back and edit your executive resume. Your work saves automatically, and you can download updated versions as many times as needed—completely free. Perfect for ongoing career management." }
  ];

  const handleFontSizeChange = (key, value) => setFontSizes(prev => ({ ...prev, [key]: Math.max(4, Math.min(24, parseInt(value) || prev[key])) }));
  const resetFontSizes = () => setFontSizes({ name: 16, title: 10, sectionTitle: 10, contactInfo: 7, jobTitle: 10, company: 8, degree: 9, institution: 8, date: 7, regularText: 8, bulletText: 8, skillText: 8, achievementText: 9 });
  const getSocialIcon = () => <FiGlobe />;
  const formatSocialUrl = (url) => url ? url.replace(/(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '') : '';
  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const hasContent = () => formData.fullName || formData.title || formData.summary || formData.socialLinks.length > 0 || formData.experience.length > 0 || formData.education.length > 0 || formData.expertise.length > 0 || formData.certifications.length > 0 || formData.boardPositions.length > 0 || formData.achievements.length > 0 || formData.publications.length > 0 || formData.speakingEngagements.length > 0;

  const createAddFunction = (key, current, setter, defaultFunc, isValid) => () => {
    if (!isValid()) return;
    const item = { ...current };
    if (item.isEditing) { const updated = [...formData[key]]; updated[item.editIndex] = { ...item, isEditing: false, editIndex: null }; setFormData({ ...formData, [key]: updated }); }
    else { setFormData({ ...formData, [key]: [...formData[key], { ...item, isEditing: false, editIndex: null }] }); }
    setter(defaultFunc());
  };
  const createEditFunction = (key, setter) => (index) => setter({ ...formData[key][index], isEditing: true, editIndex: index });
  const createDeleteFunction = (key) => (index) => { const updated = [...formData[key]]; updated.splice(index, 1); setFormData({ ...formData, [key]: updated }); };

  const addExperience = createAddFunction('experience', currentExperience, setCurrentExperience, defaultExperience, () => currentExperience.position && currentExperience.employer);
  const editExperience = createEditFunction('experience', setCurrentExperience);
  const deleteExperience = createDeleteFunction('experience');
  const addEducation = createAddFunction('education', currentEducation, setCurrentEducation, defaultEducation, () => currentEducation.institution && currentEducation.degree);
  const editEducation = createEditFunction('education', setCurrentEducation);
  const deleteEducation = createDeleteFunction('education');
  const addExpertise = createAddFunction('expertise', currentExpertise, setCurrentExpertise, defaultExpertise, () => currentExpertise.name.trim());
  const editExpertise = createEditFunction('expertise', setCurrentExpertise);
  const deleteExpertise = createDeleteFunction('expertise');
  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, () => currentCertification.name.trim());
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');
  const addBoardPosition = createAddFunction('boardPositions', currentBoardPosition, setCurrentBoardPosition, defaultBoardPosition, () => currentBoardPosition.organization.trim());
  const editBoardPosition = createEditFunction('boardPositions', setCurrentBoardPosition);
  const deleteBoardPosition = createDeleteFunction('boardPositions');
  const addAchievement = createAddFunction('achievements', currentAchievement, setCurrentAchievement, defaultAchievement, () => currentAchievement.title.trim());
  const editAchievement = createEditFunction('achievements', setCurrentAchievement);
  const deleteAchievement = createDeleteFunction('achievements');
  const addPublication = createAddFunction('publications', currentPublication, setCurrentPublication, defaultPublication, () => currentPublication.title.trim());
  const editPublication = createEditFunction('publications', setCurrentPublication);
  const deletePublication = createDeleteFunction('publications');
  const addSpeakingEngagement = createAddFunction('speakingEngagements', currentSpeakingEngagement, setCurrentSpeakingEngagement, defaultSpeakingEngagement, () => currentSpeakingEngagement.event.trim());
  const editSpeakingEngagement = createEditFunction('speakingEngagements', setCurrentSpeakingEngagement);
  const deleteSpeakingEngagement = createDeleteFunction('speakingEngagements');
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
      pdf.save(`${formData.fullName || 'executive_resume'}_resume.pdf`);
      setShowSharePopup(true);
    } catch (err) { console.error("PDF Error:", err); alert("Failed to generate PDF."); }
    finally { setIsGeneratingPDF(false); }
  };

  const ExecutiveTemplate = ({ formData }) => {
    const hasSummary = formData.summary?.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasExpertise = formData.expertise.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasBoardPositions = formData.boardPositions.length > 0;
    const hasAchievements = formData.achievements.length > 0;
    const hasPublications = formData.publications.length > 0;
    const hasSpeakingEngagements = formData.speakingEngagements.length > 0;

    return (
      <div className="cf-universal-template">
        <header className="cf-resume-header">
          <h1 className="cf-resume-name" style={{ fontSize: `${fontSizes.name}pt` }}>{formData.fullName || 'Your Name'}</h1>
          {formData.title && <h2 className="cf-professional-title" style={{ fontSize: `${fontSizes.title}pt` }}>{formData.title}</h2>}
          <div className="cf-contact-row">
            {formData.email && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMail /> {formData.email}</div>}
            {(formData.email && (formData.phone || formData.address)) && <div className="cf-contact-separator">|</div>}
            {formData.phone && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiPhone /> {formData.phone}</div>}
            {(formData.phone && formData.address) && <div className="cf-contact-separator">|</div>}
            {formData.address && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMapPin /> {formData.address}</div>}
            {formData.socialLinks.map((link, i) => (<div key={i} className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}>{getSocialIcon(link.platform)} {formatSocialUrl(link.url)}</div>))}
          </div>
        </header>
        {hasSummary && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EXECUTIVE PROFILE</h2><p className="cf-summary-text" style={{ fontSize: `${fontSizes.regularText}pt` }}>{formData.summary}</p></section>}
        {hasExperience && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EXECUTIVE EXPERIENCE</h2>{formData.experience.map((exp, i) => (<div key={i} className="cf-experience-item"><div className="cf-experience-header"><h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{exp.position}</h3><p className="cf-company" style={{ fontSize: `${fontSizes.company}pt` }}>{exp.employer}{exp.location && `, ${exp.location}`}</p><p className="cf-date" style={{ fontSize: `${fontSizes.date}pt` }}>{exp.startDate} – {exp.endDate || 'Present'}</p></div><ul className="cf-bullet-list">{exp.description.split('\n').filter(l => l.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{line}</li>)}</ul>{exp.achievements && <><h4 className="cf-achievement-title">Key Achievements:</h4><ul className="cf-bullet-list">{exp.achievements.split('\n').filter(l => l.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{line}</li>)}</ul></>}</div>))}</section>}
        {hasEducation && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EDUCATION</h2>{formData.education.map((edu, i) => (<div key={i} className="cf-education-item"><h3 style={{ fontSize: `${fontSizes.degree}pt` }}>{edu.degree}{edu.program && `, ${edu.program}`}</h3><p className="cf-institution-text" style={{ fontSize: `${fontSizes.institution}pt` }}>{edu.institution}{edu.location && `, ${edu.location}`}</p><p className="cf-date" style={{ fontSize: `${fontSizes.date}pt` }}>{edu.startDate} – {edu.endDate || 'Present'}{edu.honors && ` • ${edu.honors}`}</p></div>))}</section>}
        {hasExpertise && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CORE COMPETENCIES</h2><div className="cf-expertise-grid">{Object.entries(formData.expertise.reduce((acc, expertise) => { const cat = expertise.category || 'General'; if (!acc[cat]) acc[cat] = []; acc[cat].push(expertise.name); return acc; }, {})).map(([categoryName, skills]) => (<div key={categoryName} className="cf-expertise-category"><h3 className="cf-expertise-category-title">{categoryName}</h3><ul className="cf-skills-list">{skills.map((skill, i) => <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>{skill}</li>)}</ul></div>))}</div></section>}
        {hasAchievements && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>SELECT ACHIEVEMENTS</h2><ul className="cf-bullet-list">{formData.achievements.map((a, i) => (<li key={i} style={{ fontSize: `${fontSizes.achievementText}pt` }}><strong style={{ fontWeight: 700 }}>{a.title}:</strong> {a.description} {a.metrics && `(${a.metrics})`} {a.year && `• ${a.year}`}</li>))}</ul></section>}
        {hasBoardPositions && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>BOARD APPOINTMENTS & GOVERNANCE</h2>{formData.boardPositions.map((b, i) => (<div key={i} className="cf-board-item" style={{ fontSize: `${fontSizes.regularText}pt` }}><strong style={{ fontWeight: 700 }}>{b.position}</strong> • {b.organization} • {b.startDate} – {b.endDate || 'Present'}</div>))}</section>}
        {hasCertifications && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL CERTIFICATIONS</h2>{formData.certifications.map((c, i) => (<div key={i} className="cf-cert-item" style={{ fontSize: `${fontSizes.regularText}pt` }}><strong style={{ fontWeight: 700 }}>{c.name}</strong>{c.issuingAuthority && ` • ${c.issuingAuthority}`}{c.year && ` • ${c.year}`}</div>))}</section>}
        {hasPublications && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PUBLICATIONS & THOUGHT LEADERSHIP</h2><ul className="cf-bullet-list">{formData.publications.map((p, i) => (<li key={i} style={{ fontSize: `${fontSizes.bulletText}pt` }}>"{p.title}" • {p.publisher} • {p.year}</li>))}</ul></section>}
        {hasSpeakingEngagements && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>SPEAKING ENGAGEMENTS</h2><ul className="cf-bullet-list">{formData.speakingEngagements.map((s, i) => (<li key={i} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{s.event} • {s.organization} • {s.year}</li>))}</ul></section>}
      </div>
    );
  };

  const canonicalUrl = "https://professionalresumefree.com/ats-friendly-ceo-resume-builder";

  return (
    <>
      <style>{careerFlowStyles}</style>
      <div className="cf-resume-builder" lang="en-US">
        <Head>
          <title>Free Executive Resume Builder 2026 | CEO/C-Suite Templates</title>
          <meta name="title" content="Free Executive Resume Builder 2026 | CEO/C-Suite Templates" />
          <meta name="description" content="Create a professional executive resume for free. CEO-optimized templates trusted by 25K+ business leaders. Download PDF in minutes. Updated for 2026." />
          <meta name="keywords" content="executive resume builder, CEO resume templates, C-suite resume builder, board resume, executive CV, free resume builder for business leaders, senior executive resume, managing director CV, board director resume, leadership resume" />
          <meta name="author" content="Professional Executive Resume Free" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
          <meta name="date" content={safeCurrentDate} />
          <meta name="last-modified" content={safeLastModifiedDate} />
          <meta name="revisit-after" content="1 days" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:title" content="Free Executive Resume Builder 2026 | CEO/C-Suite Templates" />
          <meta property="og:description" content="Create a professional executive resume for free. CEO-optimized templates trusted by 25K+ business leaders. Download PDF in minutes. Updated for 2026." />
          <meta property="og:image" content="https://professionalresumefree.com/images/og-executive-resume-builder-preview.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Free Executive Resume Builder - Create Professional CEO Resumes Online" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Professional Executive Resume Free" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="en_GB" />
          <meta property="og:locale:alternate" content="en_CA" />
          <meta property="og:locale:alternate" content="en_AU" />
          <meta property="og:updated_time" content={safeLastModifiedDate} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Free Executive Resume Builder 2026 | CEO/C-Suite Templates" />
          <meta name="twitter:description" content="Create a professional executive resume for free. CEO-optimized templates trusted by 25K+ business leaders. Download PDF in minutes. Updated for 2026." />
          <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-executive-resume-builder-preview.jpg" />
          <meta name="twitter:image:alt" content="Free Executive Resume Builder with Board-Level Templates" />
          <meta name="twitter:site" content="@ProResumeFree" />
          <meta name="twitter:creator" content="@ProResumeFree" />
          <meta name="theme-color" content="#1A1A2E" />
          <meta name="msapplication-TileColor" content="#1A1A2E" />
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
                    "name": "Free Executive Resume Builder 2026 | CEO/C-Suite Templates",
                    "description": "Create professional executive resumes for free. Land board-level interviews with our CEO resume builder.",
                    "datePublished": "2026-01-01",
                    "dateModified": safeLastModifiedDate,
                    "inLanguage": "en-US",
                    "isPartOf": {
                      "@type": "WebSite",
                      "@id": "https://professionalresumefree.com/#website",
                      "url": "https://professionalresumefree.com",
                      "name": "Professional Executive Resume Free",
                      "description": "Free online resume builder for business leaders and executives",
                      "publisher": {
                        "@type": "Organization",
                        "@id": "https://professionalresumefree.com/#organization",
                        "name": "Professional Executive Resume Free",
                        "url": "https://professionalresumefree.com",
                        "logo": {
                          "@type": "ImageObject",
                          "url": "https://professionalresumefree.com/logo.png",
                          "width": 512,
                          "height": 512
                        },
                        "sameAs": [
                          "https://twitter.com/ProResumeFree",
                          "https://linkedin.com/company/professional-resume-free",
                          "https://facebook.com/ProfessionalResumeFree",
                          "https://youtube.com/@ProfessionalResumeFree"
                        ]
                      }
                    },
                    "primaryImageOfPage": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/images/og-executive-resume-builder-preview.jpg",
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
                          "name": "Executive Resume Builder",
                          "item": canonicalUrl
                        }
                      ]
                    },
                    "mainEntity": {
                      "@type": "SoftwareApplication",
                      "name": "Executive Resume Builder - CEO/C-Suite Resume Maker",
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
                        "ratingCount": 50365,
                        "bestRating": 5,
                        "worstRating": 1
                      },
                      "description": "Free online executive resume builder for CEOs, C-suite executives, board directors, and senior business leaders.",
                      "featureList": [
                        "Executive Board-Level Templates",
                        "Strategic Leadership Formatting",
                        "One-Click PDF Download",
                        "Achievement Quantification",
                        "Mobile-Friendly Editor",
                        "No Sign Up Required",
                        "Free Forever"
                      ],
                      "softwareVersion": "2026.1.0",
                      "screenshot": "https://professionalresumefree.com/images/screenshot-executive-resume-builder.jpg",
                      "applicationSuite": "Executive Career Tools",
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
                          "name": "Executive Resume Builder Support Team"
                        }
                      },
                      "mainEntityOfPage": `${canonicalUrl}#webpage`
                    }))
                  },
                  {
                    "@type": "HowTo",
                    "name": "How to Create a Professional Executive Resume with Our Free Builder",
                    "description": "Step-by-step guide to create an executive-level resume for free",
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
                        "name": "Choose an Executive Template",
                        "text": "Select from our executive-level resume templates designed for CEOs, CFOs, COOs, board directors, and senior leaders.",
                        "url": `${canonicalUrl}#templates`,
                        "image": "https://professionalresumefree.com/images/step1-executive-template.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Enter Your Executive Information",
                        "text": "Add your leadership experience, education, board positions, certifications, and strategic achievements using our guided forms.",
                        "url": `${canonicalUrl}#editor`,
                        "image": "https://professionalresumefree.com/images/step2-executive-info.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Customize and Optimize",
                        "text": "Use our executive-specific suggestions to improve leadership keywords and strategic formatting for board-level review.",
                        "url": `${canonicalUrl}#optimize`,
                        "image": "https://professionalresumefree.com/images/step3-optimize.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 4,
                        "name": "Download Your Executive Resume",
                        "text": "Export your professional executive resume as PDF, Word, or plain text - completely free, no watermarks.",
                        "url": `${canonicalUrl}#download`,
                        "image": "https://professionalresumefree.com/images/step4-download.jpg"
                      }
                    ]
                  },
                  {
                    "@type": "Service",
                    "serviceType": "Online Executive Resume Building Service",
                    "provider": {
                      "@type": "Organization",
                      "name": "Professional Executive Resume Free",
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
                      "name": "Free Executive Resume Building Services",
                      "itemListElement": [
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Executive Board Resume Templates"
                          }
                        },
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "C-Suite Resume Editing"
                          }
                        }
                      ]
                    },
                    "description": "Free executive resume builder for business leaders and senior executives worldwide",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD"
                    }
                  },
                  {
                    "@type": "SpeakableSpecification",
                    "cssSelector": [".cf-hero-title", ".cf-hero-subtitle", ".cf-faq-question"]
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
                          "name": "Professional Executive Resume Free"
                        },
                        "itemReviewed": {
                          "@type": "SoftwareApplication",
                          "name": "Executive Resume Builder - CEO/C-Suite Resume Maker",
                          "applicationCategory": "BusinessApplication",
                          "operatingSystem": "Any",
                          "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                          },
                          "description": "Free online executive resume builder that helps business leaders create professional resumes and land board-level interviews faster.",
                          "url": canonicalUrl
                        }
                      }
                    }))
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

        <nav className="cf-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><Link href="https://professionalresumefree.com" className="cf-breadcrumb-link" prefetch={false}><FiHome className="cf-breadcrumb-icon"/><span className="cf-breadcrumb-text">Home</span></Link></li>
            <li className="cf-breadcrumb-separator"><FiChevronRightIcon/></li>
            <li><Link href="/ats-friendly-ceo-resume-builder" className="cf-breadcrumb-link" prefetch={false}><span className="cf-breadcrumb-text">Free C-Suite Template</span></Link></li>
          </ol>
        </nav>

        <section className="cf-hero">
          <div className="cf-container">
            <div className="cf-hero-content">
              <div className="cf-trust-badge"><FiStar className="cf-trust-icon"/><span className="cf-trust-text">Best Free Executive Resume Builder 2026</span></div>
              <h1 className="cf-hero-title">Free Executive <span className="cf-gradient-text">Resume Builder 2026</span></h1>
              <p className="cf-hero-subtitle">Create a <strong className="cf-hero-highlight">professional, board-level executive resume for free in minutes.</strong> Our CEO resume builder ensures your leadership experience and strategic achievements get noticed by boards and search committees.</p>
              <div className="cf-cta-buttons">
                <button onClick={() => setActiveSection('personal')} className="cf-btn-primary" aria-label="Start building your free executive resume now—no sign-up required">
                  <span className="cf-btn-text">Start Building Your Executive Resume Now</span>
                  <FiArrowRight className="cf-btn-icon" />
                  <div className="cf-btn-pulse"></div>
                </button>
                <button onClick={generatePDF} className="cf-btn-secondary" aria-label="Download executive resume as PDF" disabled={isGeneratingPDF || !hasContent()}><FiDownload className="cf-btn-icon"/><span className="cf-btn-text">Download Executive Resume PDF</span></button>
              </div>
              <div className="cf-hero-stats">
                <div className="cf-stat-item"><span className="cf-stat-number">98%</span><span className="cf-stat-label">ATS Pass Rate</span></div>
                <div className="cf-stat-item"><span className="cf-stat-number">24h</span><span className="cf-stat-label">Avg. Interview Time</span></div>
              </div>
              <div className="cf-industry-badges">
                <div className="cf-badge-grid">
                  <span className="cf-badge-item"><FiBriefcase/> CEO Resume Templates</span>
                  <span className="cf-badge-item"><FiDollarSign/> CFO Resume Templates</span>
                  <span className="cf-badge-item"><FiTrendingUp/> COO Resume Templates</span>
                  <span className="cf-badge-item"><FiUsers/> Board Director CVs</span>
                  <span className="cf-badge-item"><FiGlobe/> Managing Director</span>
                  <span className="cf-badge-item"><FiTarget/> Senior Vice President</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cf-layout">
          <div className="cf-preview-section">
            <div className="cf-preview-header"><div className="cf-preview-actions"><button onClick={() => setShowFullPreview(!showFullPreview)} className="cf-preview-btn"><FiEye/> {showFullPreview ? 'Hide Full Preview' : 'Show Full Preview'}</button><button onClick={generatePDF} className="cf-download-btn" disabled={isGeneratingPDF || !hasContent()}><FiDownload/>{isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}</button></div></div>
            <div className={`cf-preview-container ${showFullPreview ? 'cf-full-preview' : ''}`}><div className="cf-resume-card"><div className="cf-preview-content"><div className="cf-resume-preview" ref={resumeRef}><ExecutiveTemplate formData={formData}/></div></div></div></div>
          </div>

          <div className="cf-form-section">
            <div className="cf-form-nav">
              {[{id:'personal',label:'Executive Profile',icon:<FiUser/>},{id:'experience',label:'Executive Experience',icon:<FiBriefcase/>},{id:'education',label:'Education',icon:<FiBook/>},{id:'expertise',label:'Core Competencies',icon:<FiTarget/>},{id:'achievements',label:'Key Achievements',icon:<FiAward/>},{id:'settings',label:'Font Settings',icon:<FiSettings/>}].map(item => (<button key={item.id} className={`cf-nav-btn ${activeSection===item.id?'cf-nav-btn-active':''}`} onClick={()=>setActiveSection(item.id)}>{item.icon}<span>{item.label}</span></button>))}
            </div>

            <div className="cf-form-content">
              {activeSection==='personal'&&(
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiUser/> Executive Profile</h3>
                  <div className="cf-form-card">
                    <div className="cf-form-group"><label className="cf-form-label">Full Name*<input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John A. Smith" required className="cf-form-input"/></label><label className="cf-form-label">Current/Desired Title*<input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Chief Executive Officer" required className="cf-form-input"/></label></div>
                    <div className="cf-form-group"><label className="cf-form-label">Email*<input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john.smith@executive.com" required className="cf-form-input"/></label><label className="cf-form-label">Phone<input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className="cf-form-input"/></label></div>
                    <label className="cf-form-label">Location<input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="New York, NY | Open to Relocation" className="cf-form-input"/></label>
                  </div>
                  <div className="cf-form-card"><label className="cf-form-label">Executive Summary*<textarea name="summary" value={formData.summary} onChange={handleInputChange} placeholder="Results-driven Chief Executive Officer with 20+ years of P&L leadership experience in Fortune 500 technology companies..." required className="cf-form-textarea" rows="6"/><div className="cf-char-count">{formData.summary.length}/800 characters</div></label></div>
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title"><FiGlobe/> Professional Links</h4><p className="cf-section-desc">Add your executive profiles (LinkedIn, board bio, portfolio, etc.)</p>
                    <div className="cf-social-input">
                      <select value={currentSocialLink.platform} onChange={e=>setCurrentSocialLink({...currentSocialLink,platform:e.target.value})} className="cf-form-select"><option value="">Select Platform</option><option value="LinkedIn">LinkedIn Profile</option><option value="BoardBio">Board Bio/Profile</option><option value="Portfolio">Executive Portfolio</option><option value="Website">Personal Website</option><option value="Forbes">Forbes Profile</option><option value="Twitter">Executive Twitter</option></select>
                      <input type="url" placeholder="https://linkedin.com/in/yourprofile" value={currentSocialLink.url} onChange={e=>setCurrentSocialLink({...currentSocialLink,url:e.target.value})} className="cf-form-input"/>
                      <div className="cf-form-actions"><button onClick={addSocialLink} className="cf-add-btn" disabled={!currentSocialLink.platform||!currentSocialLink.url}><FiPlus/> {currentSocialLink.isEditing?'Update':'Add Link'}</button>{currentSocialLink.isEditing&&<button onClick={()=>setCurrentSocialLink(defaultSocialLink())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.socialLinks.length===0?<p className="cf-empty-msg">No professional links added yet</p>:formData.socialLinks.map((link,i)=>(<div key={i} className="cf-list-item"><div className="cf-item-info"><span className="cf-item-platform">{link.platform}</span><span className="cf-item-url">{formatSocialUrl(link.url)}</span></div><div className="cf-item-actions"><button onClick={()=>editSocialLink(i)} className="cf-edit-btn" aria-label={`Edit ${link.platform} link`}><FiEdit2/></button><button onClick={()=>deleteSocialLink(i)} className="cf-delete-btn" aria-label={`Delete ${link.platform} link`}><FiTrash2/></button></div></div>))}</div>
                  </div>
                </div>
              )}

              {activeSection==='experience'&&(
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiBriefcase/> Executive Experience</h3><p className="cf-section-desc">List your executive positions in reverse chronological order. Focus on strategic leadership and P&L impact.</p>
                  <div className="cf-form-card">
                    <div className="cf-form-group"><label className="cf-form-label">Position Title*<input value={currentExperience.position} onChange={e=>setCurrentExperience({...currentExperience,position:e.target.value})} placeholder="Chief Executive Officer" required className="cf-form-input"/></label><label className="cf-form-label">Company/Organization*<input value={currentExperience.employer} onChange={e=>setCurrentExperience({...currentExperience,employer:e.target.value})} placeholder="Global Technology Corporation" required className="cf-form-input"/></label></div>
                    <div className="cf-form-group"><label className="cf-form-label">Location<input value={currentExperience.location} onChange={e=>setCurrentExperience({...currentExperience,location:e.target.value})} placeholder="New York, NY" className="cf-form-input"/></label></div>
                    <div className="cf-form-group"><label className="cf-form-label">Start Date<input type="text" placeholder="Month Year" value={currentExperience.startDate} onChange={e=>setCurrentExperience({...currentExperience,startDate:e.target.value})} className="cf-form-input"/></label><label className="cf-form-label">End Date<input type="text" placeholder="Month Year or Present" value={currentExperience.endDate} onChange={e=>setCurrentExperience({...currentExperience,endDate:e.target.value})} className="cf-form-input"/></label></div>
                    <label className="cf-form-label">Key Responsibilities & Scope*<textarea value={currentExperience.description} onChange={e=>setCurrentExperience({...currentExperience,description:e.target.value})} placeholder="• Led global organization of 5,000+ employees with $2B annual revenue..." required className="cf-form-textarea" rows="6"/><div className="cf-char-count">{currentExperience.description.length}/1500 characters</div></label>
                    <label className="cf-form-label">Key Strategic Achievements<textarea value={currentExperience.achievements} onChange={e=>setCurrentExperience({...currentExperience,achievements:e.target.value})} placeholder="• Led digital transformation increasing EBITDA by 35% over 3 years..." className="cf-form-textarea" rows="6"/><div className="cf-char-count">{currentExperience.achievements?.length||0}/2000 characters</div></label>
                    <div className="cf-form-actions"><button onClick={addExperience} className="cf-add-btn" disabled={!currentExperience.position||!currentExperience.employer}><FiPlus/> {currentExperience.isEditing?'Update Executive Experience':'Add Executive Experience'}</button>{currentExperience.isEditing&&<button onClick={()=>setCurrentExperience(defaultExperience())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                  </div>
                  <div className="cf-form-card"><h4 className="cf-sub-section-title">Your Executive Experience</h4>{formData.experience.length===0?<p className="cf-empty-msg">No executive experience added yet</p>:<div className="cf-items-list">{formData.experience.map((exp,i)=>(<div key={i} className="cf-list-item"><div className="cf-item-content"><div className="cf-item-header"><strong className="cf-item-title">{exp.position}</strong><span className="cf-item-subtitle">at {exp.employer}</span></div><div className="cf-item-meta"><span>{exp.location}</span><span>{exp.startDate} – {exp.endDate||'Present'}</span></div><div className="cf-item-desc"><h4>Responsibilities:</h4>{exp.description.split('\n').filter(l=>l.trim()).map((line,j)=><p key={j} className="cf-bullet-point">• {line}</p>)}{exp.achievements&&<><h4>Achievements:</h4>{exp.achievements.split('\n').filter(l=>l.trim()).map((line,j)=><p key={j} className="cf-bullet-point">• {line}</p>)}</>}</div></div><div className="cf-item-actions"><button onClick={()=>editExperience(i)} className="cf-edit-btn" aria-label={`Edit ${exp.position} experience`}><FiEdit2/></button><button onClick={()=>deleteExperience(i)} className="cf-delete-btn" aria-label={`Delete ${exp.position} experience`}><FiTrash2/></button></div></div>))}</div>}</div>
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title"><FiUsers/> Board Appointments & Governance</h4><p className="cf-section-desc">List your board directorships, advisory roles, and governance experience</p>
                    <div className="cf-form-card">
                      <div className="cf-form-group"><label className="cf-form-label">Organization*<input value={currentBoardPosition.organization} onChange={e=>setCurrentBoardPosition({...currentBoardPosition,organization:e.target.value})} placeholder="XYZ Corporation (NYSE: XYZ)" className="cf-form-input"/></label><label className="cf-form-label">Position/Role*<input value={currentBoardPosition.position} onChange={e=>setCurrentBoardPosition({...currentBoardPosition,position:e.target.value})} placeholder="Independent Director, Audit Committee Chair" className="cf-form-input"/></label></div>
                      <div className="cf-form-group"><label className="cf-form-label">Start Date<input type="text" placeholder="Month Year" value={currentBoardPosition.startDate} onChange={e=>setCurrentBoardPosition({...currentBoardPosition,startDate:e.target.value})} className="cf-form-input"/></label><label className="cf-form-label">End Date<input type="text" placeholder="Month Year or Present" value={currentBoardPosition.endDate} onChange={e=>setCurrentBoardPosition({...currentBoardPosition,endDate:e.target.value})} className="cf-form-input"/></label></div>
                      <div className="cf-form-actions"><button onClick={addBoardPosition} className="cf-add-btn" disabled={!currentBoardPosition.organization.trim()||!currentBoardPosition.position.trim()}><FiPlus/> {currentBoardPosition.isEditing?'Update Board Position':'Add Board Position'}</button>{currentBoardPosition.isEditing&&<button onClick={()=>setCurrentBoardPosition(defaultBoardPosition())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.boardPositions.map((b,i)=>(<div key={i} className="cf-list-item"><div className="cf-item-content"><div className="cf-item-header"><strong className="cf-item-title">{b.position}</strong></div><div className="cf-item-meta"><span>{b.organization}</span><span>{b.startDate} – {b.endDate||'Present'}</span></div></div><div className="cf-item-actions"><button onClick={()=>editBoardPosition(i)} className="cf-edit-btn" aria-label={`Edit ${b.position}`}><FiEdit2/></button><button onClick={()=>deleteBoardPosition(i)} className="cf-delete-btn" aria-label={`Delete ${b.position}`}><FiTrash2/></button></div></div>))}{formData.boardPositions.length===0&&<p className="cf-empty-msg">No board positions added yet</p>}</div>
                  </div>
                </div>
              )}

              {activeSection==='education'&&(
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiBook/> Education</h3><p className="cf-section-desc">List your advanced degrees, executive education, and relevant training</p>
                  <div className="cf-form-card">
                    <div className="cf-form-group"><label className="cf-form-label">Institution*<input value={currentEducation.institution} onChange={e=>setCurrentEducation({...currentEducation,institution:e.target.value})} placeholder="Harvard Business School" required className="cf-form-input"/></label><label className="cf-form-label">Degree/Certification*<input value={currentEducation.degree} onChange={e=>setCurrentEducation({...currentEducation,degree:e.target.value})} placeholder="Master of Business Administration (MBA)" required className="cf-form-input"/></label></div>
                    <div className="cf-form-group"><label className="cf-form-label">Program / Concentration / Focus<input value={currentEducation.program} onChange={e=>setCurrentEducation({...currentEducation,program:e.target.value})} placeholder="Strategic Management, Finance" className="cf-form-input"/></label><label className="cf-form-label">Location<input value={currentEducation.location} onChange={e=>setCurrentEducation({...currentEducation,location:e.target.value})} placeholder="Boston, MA" className="cf-form-input"/></label></div>
                    <div className="cf-form-group"><label className="cf-form-label">Start Date<input type="text" placeholder="Year" value={currentEducation.startDate} onChange={e=>setCurrentEducation({...currentEducation,startDate:e.target.value})} className="cf-form-input"/></label><label className="cf-form-label">End Date / Expected<input type="text" placeholder="Year" value={currentEducation.endDate} onChange={e=>setCurrentEducation({...currentEducation,endDate:e.target.value})} className="cf-form-input"/></label></div>
                    <label className="cf-form-label">Honors / Distinctions<input value={currentEducation.honors} onChange={e=>setCurrentEducation({...currentEducation,honors:e.target.value})} placeholder="Baker Scholar, Summa Cum Laude" className="cf-form-input"/></label>
                    <div className="cf-form-actions"><button onClick={addEducation} className="cf-add-btn" disabled={!currentEducation.institution||!currentEducation.degree}><FiPlus/> {currentEducation.isEditing?'Update Education':'Add Education'}</button>{currentEducation.isEditing&&<button onClick={()=>setCurrentEducation(defaultEducation())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                  </div>
                  <div className="cf-form-card"><h4 className="cf-sub-section-title">Your Education</h4>{formData.education.length===0?<p className="cf-empty-msg">No education added yet</p>:<div className="cf-items-list">{formData.education.map((edu,i)=>(<div key={i} className="cf-list-item"><div className="cf-item-content"><div className="cf-item-header"><strong className="cf-item-title">{edu.degree}</strong>{edu.program&&<span className="cf-item-subtitle"> – {edu.program}</span>}</div><div className="cf-item-meta"><span>{edu.institution}{edu.location&&`, ${edu.location}`}</span><span>{edu.startDate} – {edu.endDate||'Present'}{edu.honors&&` • ${edu.honors}`}</span></div></div><div className="cf-item-actions"><button onClick={()=>editEducation(i)} className="cf-edit-btn" aria-label={`Edit ${edu.degree}`}><FiEdit2/></button><button onClick={()=>deleteEducation(i)} className="cf-delete-btn" aria-label={`Delete ${edu.degree}`}><FiTrash2/></button></div></div>))}</div>}</div>
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title"><FiAward/> Professional Certifications</h4><p className="cf-section-desc">Add your executive certifications, professional designations, and board certifications</p>
                    <div className="cf-form-card">
                      <div className="cf-form-group"><label className="cf-form-label">Certification Name*<input value={currentCertification.name} onChange={e=>setCurrentCertification({...currentCertification,name:e.target.value})} placeholder="Certified Board Director (CBD)" className="cf-form-input"/></label><label className="cf-form-label">Issuing Authority<input value={currentCertification.issuingAuthority} onChange={e=>setCurrentCertification({...currentCertification,issuingAuthority:e.target.value})} placeholder="National Association of Corporate Directors" className="cf-form-input"/></label></div>
                      <label className="cf-form-label">Year Obtained<input value={currentCertification.year} onChange={e=>setCurrentCertification({...currentCertification,year:e.target.value})} placeholder="2020" className="cf-form-input"/></label>
                      <div className="cf-form-actions"><button onClick={addCertification} className="cf-add-btn" disabled={!currentCertification.name.trim()}><FiPlus/> {currentCertification.isEditing?'Update Certification':'Add Certification'}</button>{currentCertification.isEditing&&<button onClick={()=>setCurrentCertification(defaultCertification())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.certifications.map((c,i)=>(<div key={i} className="cf-list-item"><div><strong>{c.name}</strong>{c.issuingAuthority&&` • ${c.issuingAuthority}`}{c.year&&` • ${c.year}`}</div><div className="cf-item-actions"><button onClick={()=>editCertification(i)} className="cf-edit-btn"><FiEdit2/></button><button onClick={()=>deleteCertification(i)} className="cf-delete-btn"><FiTrash2/></button></div></div>))}{formData.certifications.length===0&&<p className="cf-empty-msg">No certifications added yet</p>}</div>
                  </div>
                </div>
              )}

              {activeSection==='expertise'&&(
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiTarget/> Core Competencies</h3>
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title">Areas of Executive Expertise</h4><p className="cf-section-desc">List your core competencies by category (Strategic Leadership, Financial Management, etc.)</p>
                    <div className="cf-expertise-input">
                      <div className="cf-form-group"><label className="cf-form-label">Expertise/Skill Name*<input value={currentExpertise.name} onChange={e=>setCurrentExpertise({...currentExpertise,name:e.target.value})} placeholder="Corporate Governance" className="cf-form-input"/></label><label className="cf-form-label">Category<select value={currentExpertise.category} onChange={e=>setCurrentExpertise({...currentExpertise,category:e.target.value})} className="cf-form-select"><option value="">Select Category</option><option value="Strategic Leadership">Strategic Leadership</option><option value="Financial Management">Financial Management</option><option value="Operational Excellence">Operational Excellence</option><option value="Digital Transformation">Digital Transformation</option><option value="M&A & Integration">M&A & Integration</option><option value="Global Expansion">Global Expansion</option><option value="Risk Management">Risk Management</option><option value="ESG & Sustainability">ESG & Sustainability</option><option value="Talent Development">Talent Development</option></select></label></div>
                      <div className="cf-form-actions"><button onClick={addExpertise} className="cf-add-btn" disabled={!currentExpertise.name.trim()}><FiPlus/> {currentExpertise.isEditing?'Update Expertise':'Add Expertise'}</button>{currentExpertise.isEditing&&<button onClick={()=>setCurrentExpertise(defaultExpertise())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{Object.entries(formData.expertise.reduce((acc, expertise, i) => { const cat = expertise.category || 'General'; if (!acc[cat]) acc[cat] = []; acc[cat].push({...expertise, index: i}); return acc; }, {})).map(([categoryName, category]) => (<div key={categoryName} className="cf-expertise-category"><h4 className="cf-expertise-category-title">{categoryName}</h4><div className="cf-expertise-items">{category.map((exp, i) => (<div key={i} className="cf-list-item"><span>{exp.name}</span><div className="cf-item-actions"><button onClick={()=>editExpertise(exp.index)} className="cf-edit-btn"><FiEdit2/></button><button onClick={()=>deleteExpertise(exp.index)} className="cf-delete-btn"><FiTrash2/></button></div></div>))}</div></div>))}{formData.expertise.length===0&&<p className="cf-empty-msg">No expertise added yet</p>}</div>
                  </div>
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title"><FiBook/> Publications & Thought Leadership</h4><p className="cf-section-desc">Add your published articles, books, white papers, and thought leadership</p>
                    <div className="cf-form-card">
                      <div className="cf-form-group"><label className="cf-form-label">Publication Title*<input value={currentPublication.title} onChange={e=>setCurrentPublication({...currentPublication,title:e.target.value})} placeholder="The Future of Digital Transformation in Global Enterprises" className="cf-form-input"/></label><label className="cf-form-label">Publisher/Journal<input value={currentPublication.publisher} onChange={e=>setCurrentPublication({...currentPublication,publisher:e.target.value})} placeholder="Harvard Business Review" className="cf-form-input"/></label></div>
                      <label className="cf-form-label">Year<input value={currentPublication.year} onChange={e=>setCurrentPublication({...currentPublication,year:e.target.value})} placeholder="2023" className="cf-form-input"/></label>
                      <div className="cf-form-actions"><button onClick={addPublication} className="cf-add-btn" disabled={!currentPublication.title.trim()}><FiPlus/> {currentPublication.isEditing?'Update Publication':'Add Publication'}</button>{currentPublication.isEditing&&<button onClick={()=>setCurrentPublication(defaultPublication())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.publications.map((p,i)=>(<div key={i} className="cf-list-item"><div className="cf-item-content"><div className="cf-item-header"><strong className="cf-item-title">"{p.title}"</strong></div><div className="cf-item-meta"><span>{p.publisher}</span><span>{p.year}</span></div></div><div className="cf-item-actions"><button onClick={()=>editPublication(i)} className="cf-edit-btn" aria-label={`Edit "${p.title}"`}><FiEdit2/></button><button onClick={()=>deletePublication(i)} className="cf-delete-btn" aria-label={`Delete "${p.title}"`}><FiTrash2/></button></div></div>))}{formData.publications.length===0&&<p className="cf-empty-msg">No publications added yet</p>}</div>
                  </div>
                  <div className="cf-form-card">
                    <h4 className="cf-sub-section-title"><FiActivity/> Speaking Engagements</h4><p className="cf-section-desc">Add your conference speaking engagements, keynotes, and panel participations</p>
                    <div className="cf-form-card">
                      <div className="cf-form-group"><label className="cf-form-label">Event/Conference Name*<input value={currentSpeakingEngagement.event} onChange={e=>setCurrentSpeakingEngagement({...currentSpeakingEngagement,event:e.target.value})} placeholder="World Economic Forum Annual Meeting" className="cf-form-input"/></label><label className="cf-form-label">Host Organization<input value={currentSpeakingEngagement.organization} onChange={e=>setCurrentSpeakingEngagement({...currentSpeakingEngagement,organization:e.target.value})} placeholder="World Economic Forum" className="cf-form-input"/></label></div>
                      <label className="cf-form-label">Year<input value={currentSpeakingEngagement.year} onChange={e=>setCurrentSpeakingEngagement({...currentSpeakingEngagement,year:e.target.value})} placeholder="2024" className="cf-form-input"/></label>
                      <div className="cf-form-actions"><button onClick={addSpeakingEngagement} className="cf-add-btn" disabled={!currentSpeakingEngagement.event.trim()}><FiPlus/> {currentSpeakingEngagement.isEditing?'Update Speaking Engagement':'Add Speaking Engagement'}</button>{currentSpeakingEngagement.isEditing&&<button onClick={()=>setCurrentSpeakingEngagement(defaultSpeakingEngagement())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                    </div>
                    <div className="cf-items-list">{formData.speakingEngagements.map((s,i)=>(<div key={i} className="cf-list-item"><div className="cf-item-content"><div className="cf-item-header"><strong className="cf-item-title">{s.event}</strong></div><div className="cf-item-meta"><span>{s.organization}</span><span>{s.year}</span></div></div><div className="cf-item-actions"><button onClick={()=>editSpeakingEngagement(i)} className="cf-edit-btn" aria-label={`Edit ${s.event}`}><FiEdit2/></button><button onClick={()=>deleteSpeakingEngagement(i)} className="cf-delete-btn" aria-label={`Delete ${s.event}`}><FiTrash2/></button></div></div>))}{formData.speakingEngagements.length===0&&<p className="cf-empty-msg">No speaking engagements added yet</p>}</div>
                  </div>
                </div>
              )}

              {activeSection==='achievements'&&(
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiAward/> Key Achievements</h3><p className="cf-section-desc">Highlight your most significant executive achievements with quantifiable metrics</p>
                  <div className="cf-form-card">
                    <div className="cf-form-group"><label className="cf-form-label">Achievement Title*<input value={currentAchievement.title} onChange={e=>setCurrentAchievement({...currentAchievement,title:e.target.value})} placeholder="Led Digital Transformation Initiative" className="cf-form-input"/></label><label className="cf-form-label">Year<input value={currentAchievement.year} onChange={e=>setCurrentAchievement({...currentAchievement,year:e.target.value})} placeholder="2020-2023" className="cf-form-input"/></label></div>
                    <label className="cf-form-label">Achievement Description*<textarea value={currentAchievement.description} onChange={e=>setCurrentAchievement({...currentAchievement,description:e.target.value})} placeholder="Spearheaded enterprise-wide digital transformation across global operations" className="cf-form-textarea" rows="3"/></label>
                    <label className="cf-form-label">Quantifiable Metrics/Results<input value={currentAchievement.metrics} onChange={e=>setCurrentAchievement({...currentAchievement,metrics:e.target.value})} placeholder="35% EBITDA increase, $500M cost savings, 40% faster time-to-market" className="cf-form-input"/></label>
                    <div className="cf-form-actions"><button onClick={addAchievement} className="cf-add-btn" disabled={!currentAchievement.title.trim()||!currentAchievement.description.trim()}><FiPlus/> {currentAchievement.isEditing?'Update Achievement':'Add Achievement'}</button>{currentAchievement.isEditing&&<button onClick={()=>setCurrentAchievement(defaultAchievement())} className="cf-cancel-btn"><FiX/> Cancel</button>}</div>
                  </div>
                  <div className="cf-form-card"><h4 className="cf-sub-section-title">Your Key Achievements</h4>{formData.achievements.length===0?<p className="cf-empty-msg">No achievements added yet</p>:<div className="cf-items-list">{formData.achievements.map((a,i)=>(<div key={i} className="cf-list-item"><div className="cf-item-content"><div className="cf-item-header"><strong className="cf-item-title">{a.title}</strong>{a.year&&<span className="cf-item-subtitle"> • {a.year}</span>}</div><div className="cf-item-desc">{a.description}{a.metrics&&<div className="cf-item-metrics"><strong>Results:</strong> {a.metrics}</div>}</div></div><div className="cf-item-actions"><button onClick={()=>editAchievement(i)} className="cf-edit-btn" aria-label={`Edit ${a.title}`}><FiEdit2/></button><button onClick={()=>deleteAchievement(i)} className="cf-delete-btn" aria-label={`Delete ${a.title}`}><FiTrash2/></button></div></div>))}</div>}</div>
                </div>
              )}

              {activeSection==='settings'&&(
                <div className="cf-form-section-content">
                  <h3 className="cf-form-section-title"><FiSettings/> Font Size Settings</h3><p className="cf-section-desc">Customize font sizes for your executive resume PDF. All sizes are in points (pt).</p>
                  <div className="cf-form-card">
                    <div className="cf-font-grid">
                      {[{key:'name',label:'Name'},{key:'title',label:'Title'},{key:'sectionTitle',label:'Section Titles'},{key:'jobTitle',label:'Job Titles'},{key:'company',label:'Company Names'},{key:'degree',label:'Degrees'},{key:'institution',label:'Institution Names'},{key:'date',label:'Dates'},{key:'regularText',label:'Regular Text'},{key:'bulletText',label:'Bullet Points'},{key:'contactInfo',label:'Contact Info'},{key:'skillText',label:'Skills Text'},{key:'achievementText',label:'Achievement Text'}].map(({key,label})=>(<div key={key} className="cf-font-control"><label className="cf-font-label"><span>{label}</span><span className="cf-font-value">{fontSizes[key]}pt</span></label><input type="range" min={key==='date'?4:6} max={key==='name'?24:key==='sectionTitle'||key==='title'?18:key==='jobTitle'||key==='degree'?16:14} value={fontSizes[key]} onChange={e=>handleFontSizeChange(key,e.target.value)} className="cf-font-slider"/></div>))}
                    </div>
                    <button onClick={resetFontSizes} className="cf-reset-btn">Reset to Default Font Sizes</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <section className="cf-faq-section" aria-labelledby="faq-title">
          <div className="cf-container">
            <div className="cf-section-header">
              <h2 className="cf-section-title" id="faq-title">Frequently Asked Questions</h2>
              <p className="cf-section-subtitle">Everything you need to know about creating professional executive resumes with our tool.</p>
            </div>
            <div className="cf-faq-grid">{faqs.map((faq,i)=>(<div key={i} className="cf-faq-item"><h3 className="cf-faq-question">{faq.question}</h3><p className="cf-faq-answer">{faq.answer}</p></div>))}</div>
          </div>
        </section>

        <section className="cf-cta-section" aria-labelledby="cta-title">
          <div className="cf-container">
            <div className="cf-cta-content">
              <h2 className="cf-cta-title" id="cta-title">Ready to Advance Your Executive Career?</h2>
              <p className="cf-cta-subtitle">Join 25,000+ business leaders who landed board-level positions with our free executive resume builder.</p>
              <div className="cf-cta-btn-wrap">
                <button onClick={()=>setActiveSection('personal')} className="cf-cta-btn" aria-label="Create your free executive resume now—no sign-up required">
                  <span className="cf-cta-btn-text">Create Your Free Executive Resume Now</span>
                  <FiArrowRight className="cf-cta-btn-icon"/>
                </button>
              </div>
              <div className="cf-cta-guarantee"><FiCheck className="cf-guarantee-icon"/><span className="cf-guarantee-text">No credit card required • Free forever • Download in minutes • Board-Level Formatting</span></div>
            </div>
          </div>
        </section>

        {showFullPreview&&(<div className="cf-modal" onClick={()=>setShowFullPreview(false)}><div className="cf-modal-content" onClick={e=>e.stopPropagation()}><div className="cf-modal-header"><h3>Full Executive Resume Preview</h3><button className="cf-close-btn" onClick={()=>setShowFullPreview(false)}><FiX/></button></div><div className="cf-modal-pages"><div className="cf-modal-page"><ExecutiveTemplate formData={formData}/></div></div></div></div>)}

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
    { name: 'Executive Resume Builder', item: 'https://professionalresumefree.com/ats-friendly-ceo-resume-builder' }
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
    // ISR: Revalidate every hour (3600 seconds)
    revalidate: 3600
  };
}

export default CeoResume;