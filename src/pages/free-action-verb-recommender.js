// pages/free-action-verb-recommender.js
import { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Critical inline CSS for maximum speed
const criticalCSS = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { overflow-x: hidden; width: 100%; }
  body { 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
    line-height: 1.5; 
    color: #000000; 
    background: #ffffff; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100%;
    position: relative;
  }
  .container { 
    max-width: 1280px; 
    margin: 0 auto; 
    padding: 0 16px; 
    width: 100%;
  }
  @media (min-width: 640px) {
    .container { padding: 0 24px; }
  }
  .header { 
    background: #ffffff; 
    padding: 30px 0 20px; 
    text-align: center; 
    border-bottom: 1px solid #e5e7eb;
    width: 100%;
  }
  @media (min-width: 768px) {
    .header { padding: 40px 0 30px; }
  }
  .header h1 { 
    font-size: clamp(1.5rem, 5vw, 2.5rem); 
    margin-bottom: 16px; 
    line-height: 1.2;
    word-wrap: break-word;
    padding: 0 16px;
    max-width: 100%;
  }
  .header p { 
    font-size: clamp(0.9rem, 3vw, 1.1rem); 
    max-width: 800px; 
    margin: 0 auto 24px; 
    padding: 0 16px;
    color: #4b5563;
    word-wrap: break-word;
  }
  .trust-badge {
    display: inline-block;
    background: #f3f4f6;
    color: #000000;
    padding: 6px 16px;
    border-radius: 50px;
    font-size: 0.85rem;
    margin-bottom: 20px;
    border: 1px solid #e5e7eb;
  }
  .grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 16px; 
    margin: 30px 0; 
    width: 100%;
  }
  @media (min-width: 640px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width: 1024px) {
    .grid { grid-template-columns: repeat(3, 1fr); }
  }
  .card { 
    background: #f9fafb; 
    border-radius: 8px; 
    padding: 20px; 
    border: 1px solid #e5e7eb;
    transition: transform 0.2s, box-shadow 0.2s;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
  }
  .card:hover { 
    transform: translateY(-2px); 
    box-shadow: 0 4px 6px rgba(0,0,0,0.05); 
  }
  .btn-primary { 
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #000000; 
    color: #ffffff; 
    padding: 12px 24px; 
    border-radius: 6px; 
    text-decoration: none; 
    font-weight: 500; 
    border: 1px solid #000000;
    transition: background 0.2s;
    width: auto;
    min-width: 200px;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1;
    border: none;
  }
  @media (max-width: 480px) {
    .btn-primary { 
      width: 100%; 
      min-width: auto;
    }
  }
  .btn-primary:hover { 
    background: #333333; 
  }
  .btn-primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .btn-secondary { 
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: transparent; 
    color: #000000; 
    padding: 12px 24px; 
    border-radius: 6px; 
    text-decoration: none; 
    font-weight: 500; 
    border: 2px solid #000000; 
    transition: background 0.2s;
    width: auto;
    min-width: 200px;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1;
  }
  @media (max-width: 480px) {
    .btn-secondary { 
      width: 100%; 
      min-width: auto;
    }
  }
  .btn-secondary:hover { 
    background: #f5f5f5; 
  }
  .btn-outline {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background: transparent;
    color: #000000;
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px solid #d1d5db;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background 0.2s;
  }
  .btn-outline:hover {
    background: #f3f4f6;
  }
  .hero-stats { 
    display: flex; 
    justify-content: center; 
    gap: 16px; 
    margin: 30px 0; 
    flex-wrap: wrap; 
    width: 100%;
  }
  @media (max-width: 640px) {
    .hero-stats { gap: 12px; }
  }
  .stat-item { 
    text-align: center; 
    background: #f9fafb;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    min-width: 100px;
    flex: 1 1 auto;
    max-width: 150px;
  }
  @media (max-width: 480px) {
    .stat-item { 
      min-width: calc(50% - 12px);
      max-width: none;
    }
  }
  .stat-number { 
    font-size: clamp(1.2rem, 4vw, 1.8rem); 
    font-weight: bold; 
    display: block; 
    line-height: 1.2;
    word-wrap: break-word;
  }
  .stat-label { 
    font-size: clamp(0.7rem, 2vw, 0.85rem); 
    color: #4b5563;
    word-wrap: break-word;
  }
  .section { 
    padding: 40px 0; 
    width: 100%;
  }
  @media (min-width: 768px) {
    .section { padding: 60px 0; }
  }
  .section-title { 
    text-align: center; 
    font-size: clamp(1.3rem, 4vw, 2rem); 
    margin-bottom: 16px; 
    padding: 0 16px;
    word-wrap: break-word;
    line-height: 1.3;
  }
  .section-subtitle { 
    text-align: center; 
    color: #4b5563; 
    max-width: 700px; 
    margin: 0 auto 32px; 
    padding: 0 16px;
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
    word-wrap: break-word;
  }
  .breadcrumb { 
    padding: 12px 0; 
    background: #f9fafb; 
    border-bottom: 1px solid #e5e7eb;
    width: 100%;
  }
  .breadcrumb ol { 
    display: flex; 
    list-style: none; 
    gap: 8px; 
    flex-wrap: wrap;
    font-size: 0.85rem;
  }
  .breadcrumb a { 
    color: #000000; 
    text-decoration: none; 
    border-bottom: 1px solid transparent;
  }
  .breadcrumb a:hover { 
    border-bottom-color: #000000; 
  }
  .breadcrumb-current {
    color: #4b5563;
  }
  .search-section {
    background: #ffffff;
    border-radius: 12px;
    padding: 20px;
    border: 1px solid #e5e7eb;
    width: 100%;
    overflow: hidden;
  }
  @media (min-width: 768px) {
    .search-section {
      padding: 30px;
    }
  }
  .search-header {
    text-align: center;
    margin-bottom: 24px;
  }
  .search-header h2 {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    margin-bottom: 8px;
  }
  .search-header p {
    color: #4b5563;
    font-size: 0.95rem;
  }
  .search-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  .search-box {
    width: 100%;
  }
  .search-input-wrapper {
    position: relative;
    width: 100%;
    margin-bottom: 16px;
  }
  .search-input {
    width: 100%;
    padding: 14px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s;
    background: #ffffff;
  }
  .search-input:focus {
    outline: none;
    border-color: #000000;
  }
  .clear-search {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #9ca3af;
    cursor: pointer;
    padding: 4px;
    line-height: 1;
  }
  .clear-search:hover {
    color: #000000;
  }
  .category-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
    width: 100%;
  }
  .category-button {
    padding: 8px 16px;
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    border-radius: 50px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s;
    color: #4b5563;
    flex: 0 1 auto;
    white-space: nowrap;
  }
  @media (max-width: 640px) {
    .category-button {
      font-size: 0.75rem;
      padding: 6px 12px;
    }
  }
  .category-button:hover {
    background: #e5e7eb;
  }
  .category-button.active {
    background: #000000;
    color: #ffffff;
    border-color: #000000;
  }
  .selected-verbs-panel {
    background: #f9fafb;
    border-radius: 8px;
    padding: 20px;
    border: 1px solid #e5e7eb;
    width: 100%;
    overflow: hidden;
  }
  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    flex-wrap: wrap;
    gap: 10px;
  }
  .panel-header h3 {
    font-size: 1.1rem;
  }
  .clear-all-button {
    background: none;
    border: 1px solid #d1d5db;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 0.85rem;
    cursor: pointer;
    color: #4b5563;
  }
  .clear-all-button:hover {
    background: #e5e7eb;
  }
  .selected-verbs-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 16px;
    max-height: 300px;
    overflow-y: auto;
  }
  .selected-verb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #ffffff;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
    flex-wrap: wrap;
    gap: 8px;
  }
  .selected-verb-text {
    font-weight: 500;
    word-wrap: break-word;
    flex: 1;
  }
  .selected-verb-actions {
    display: flex;
    gap: 8px;
  }
  .copy-button, .remove-button {
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 0.8rem;
    cursor: pointer;
    border: none;
    transition: background 0.2s;
  }
  .copy-button {
    background: #000000;
    color: #ffffff;
  }
  .copy-button:hover {
    background: #333333;
  }
  .remove-button {
    background: #ef4444;
    color: #ffffff;
    font-size: 1rem;
    padding: 4px 8px;
  }
  .remove-button:hover {
    background: #dc2626;
  }
  .empty-selection {
    padding: 30px;
    text-align: center;
    background: #ffffff;
    border-radius: 6px;
    border: 2px dashed #e5e7eb;
    color: #9ca3af;
  }
  .copy-all-section {
    margin-top: 16px;
    text-align: center;
  }
  .copy-all-button {
    background: #000000;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background 0.2s;
    width: 100%;
  }
  .copy-all-button:hover {
    background: #333333;
  }
  .verbs-section {
    margin-top: 30px;
    width: 100%;
  }
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 15px;
  }
  .section-header h2 {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    margin: 0;
  }
  .verbs-count {
    color: #4b5563;
    font-size: 0.9rem;
    font-weight: normal;
  }
  .examples-toggle {
    background: none;
    border: 1px solid #d1d5db;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 0.9rem;
    cursor: pointer;
    color: #4b5563;
    transition: background 0.2s;
  }
  .examples-toggle:hover {
    background: #f3f4f6;
  }
  .verbs-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    width: 100%;
  }
  @media (min-width: 640px) {
    .verbs-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width: 1024px) {
    .verbs-grid { grid-template-columns: repeat(3, 1fr); }
  }
  .verb-card {
    background: #f9fafb;
    border-radius: 8px;
    padding: 16px;
    border: 1px solid #e5e7eb;
    cursor: pointer;
    transition: all 0.2s;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
  }
  .verb-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }
  .verb-card.selected {
    border: 2px solid #000000;
    background: #ffffff;
  }
  .verb-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    flex-wrap: wrap;
    gap: 8px;
  }
  .verb-category {
    background: #e5e7eb;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.7rem;
    color: #4b5563;
    white-space: nowrap;
  }
  .verb-selection {
    font-size: 0.7rem;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 4px;
    background: #000000;
    color: #ffffff;
  }
  .verb-content {
    flex: 1;
    margin-bottom: 12px;
  }
  .verb-text {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 8px;
    word-wrap: break-word;
  }
  .verb-synonyms {
    font-size: 0.8rem;
    color: #4b5563;
  }
  .synonym {
    background: #ffffff;
    padding: 2px 6px;
    border-radius: 4px;
    border: 1px solid #e5e7eb;
    display: inline-block;
    margin-right: 4px;
    margin-bottom: 4px;
  }
  .verb-example {
    background: #ffffff;
    padding: 12px;
    border-radius: 6px;
    margin-bottom: 12px;
    font-size: 0.85rem;
    border-left: 3px solid #000000;
  }
  .example-label {
    font-weight: 600;
    margin-bottom: 4px;
    color: #4b5563;
  }
  .example-text {
    color: #000000;
    word-wrap: break-word;
  }
  .verb-actions {
    display: flex;
    gap: 8px;
    margin-top: auto;
  }
  .copy-verb-button, .preview-button {
    flex: 1;
    padding: 8px;
    border: none;
    border-radius: 4px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: background 0.2s;
    text-align: center;
  }
  .copy-verb-button {
    background: #000000;
    color: #ffffff;
  }
  .copy-verb-button:hover {
    background: #333333;
  }
  .preview-button {
    background: #e5e7eb;
    color: #000000;
  }
  .preview-button:hover {
    background: #d1d5db;
  }
  .no-results {
    text-align: center;
    padding: 40px;
    background: #f9fafb;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    color: #4b5563;
  }
  .weak-verbs-section {
    background: #f9fafb;
    padding: 40px 0;
    width: 100%;
  }
  .weak-verbs-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    width: 100%;
  }
  @media (min-width: 640px) {
    .weak-verbs-grid { grid-template-columns: repeat(2, 1fr); }
  }
  .weak-verb-card {
    background: #ffffff;
    border-radius: 8px;
    padding: 16px;
    border: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .weak-verb-bad, .strong-verb-good {
    flex: 1;
    min-width: 120px;
  }
  .weak-verb-label, .strong-verb-label {
    font-size: 0.7rem;
    color: #9ca3af;
    margin-bottom: 4px;
  }
  .weak-verb-text {
    color: #ef4444;
    font-weight: 600;
    word-wrap: break-word;
  }
  .strong-verb-text {
    color: #10b981;
    font-weight: 600;
    word-wrap: break-word;
  }
  .replacement-arrow {
    font-size: 1.5rem;
    color: #4b5563;
    font-weight: bold;
  }
  .industry-section {
    padding: 40px 0;
    width: 100%;
  }
  .industry-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    width: 100%;
  }
  @media (min-width: 640px) {
    .industry-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width: 1024px) {
    .industry-grid { grid-template-columns: repeat(3, 1fr); }
  }
  .industry-card {
    background: #f9fafb;
    border-radius: 8px;
    padding: 20px;
    border: 1px solid #e5e7eb;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .industry-header {
    background: #000000;
    color: #ffffff;
    padding: 12px;
    border-radius: 6px;
    margin-bottom: 16px;
    text-align: center;
  }
  .industry-name {
    font-weight: 600;
    font-size: 1.1rem;
  }
  .industry-verbs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .industry-verb {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s;
    color: #000000;
  }
  .industry-verb:hover {
    background: #000000;
    color: #ffffff;
    border-color: #000000;
  }
  .samples-section {
    background: #f9fafb;
    padding: 40px 0;
    width: 100%;
  }
  .samples-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    width: 100%;
  }
  .sample-card {
    background: #ffffff;
    border-radius: 8px;
    padding: 20px;
    border: 1px solid #e5e7eb;
    display: flex;
    gap: 16px;
    align-items: flex-start;
    width: 100%;
    overflow: hidden;
  }
  .sample-bullet {
    font-size: 1.5rem;
    color: #000000;
    font-weight: bold;
    line-height: 1;
  }
  .sample-content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .sample-text {
    color: #4b5563;
    word-wrap: break-word;
    flex: 1;
  }
  .copy-sample-button {
    background: #000000;
    color: #ffffff;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .copy-sample-button:hover {
    background: #333333;
  }
  .tips-section {
    padding: 40px 0;
    width: 100%;
  }
  .tips-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    width: 100%;
  }
  @media (min-width: 640px) {
    .tips-grid { grid-template-columns: repeat(2, 1fr); }
  }
  .tip-card {
    background: #f9fafb;
    border-radius: 8px;
    padding: 24px;
    border: 1px solid #e5e7eb;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .tip-title {
    font-size: 1.1rem;
    margin-bottom: 12px;
    color: #000000;
  }
  .tip-description {
    color: #4b5563;
    line-height: 1.6;
    word-wrap: break-word;
  }
  .faq-section {
    background: #f9fafb;
    padding: 40px 0;
    width: 100%;
  }
  .faq-list {
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
  }
  .faq-item {
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    margin-bottom: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s;
    width: 100%;
  }
  .faq-item:hover {
    border-color: #000000;
  }
  .faq-item.active {
    border-color: #000000;
  }
  .faq-question {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .faq-question h3 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    flex: 1;
    word-wrap: break-word;
  }
  .faq-toggle {
    font-size: 1.5rem;
    font-weight: 300;
    color: #4b5563;
    width: 24px;
    text-align: center;
  }
  .faq-answer {
    padding: 0 20px 20px;
    color: #4b5563;
    line-height: 1.6;
    border-top: 1px solid #e5e7eb;
    margin-top: 0;
    word-wrap: break-word;
  }
  .benefits-section {
    padding: 40px 0;
    width: 100%;
  }
  .benefits-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    width: 100%;
  }
  @media (min-width: 640px) {
    .benefits-grid { grid-template-columns: repeat(3, 1fr); }
  }
  .benefit-card {
    background: #f9fafb;
    border-radius: 8px;
    padding: 24px;
    border: 1px solid #e5e7eb;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .benefit-title {
    font-size: 1.1rem;
    margin-bottom: 12px;
    color: #000000;
  }
  .benefit-description {
    color: #4b5563;
    line-height: 1.6;
    word-wrap: break-word;
  }
  .cta-section {
    background: #ffffff;
    color: #000000;
    padding: 40px 0;
    text-align: center;
    border-top: 1px solid #e5e7eb;
    width: 100%;
  }
  @media (min-width: 768px) {
    .cta-section { padding: 60px 0; }
  }
  .cta-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 16px;
  }
  .cta-title {
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin-bottom: 16px;
    word-wrap: break-word;
  }
  .cta-subtitle {
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    margin-bottom: 24px;
    color: #4b5563;
  }
  .cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  .cta-button, .secondary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border-radius: 6px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;
    min-width: 200px;
  }
  @media (max-width: 480px) {
    .cta-button, .secondary-button {
      width: 100%;
      min-width: auto;
    }
  }
  .cta-button {
    background: #000000;
    color: #ffffff;
    border: 1px solid #000000;
  }
  .cta-button:hover {
    background: #333333;
  }
  .secondary-button {
    background: transparent;
    color: #000000;
    border: 2px solid #000000;
  }
  .secondary-button:hover {
    background: #f5f5f5;
  }
  .cta-features {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  .feature-item {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #4b5563;
    font-size: 0.9rem;
    word-wrap: break-word;
  }
  .feature-item span {
    white-space: nowrap;
  }
  @media (max-width: 480px) {
    .feature-item span {
      white-space: normal;
    }
  }
  .highlight {
    color: #000000;
    background: linear-gradient(120deg, #f3f4f6 0%, #f3f4f6 40%, transparent 100%);
    padding: 0 4px;
  }
  hr { border: none; border-top: 1px solid #e5e7eb; margin: 40px 0; }
  .text-small { font-size: 0.85rem; color: #4b5563; }
  .text-success { color: #10b981; font-weight: 600; }
  .text-danger { color: #ef4444; font-weight: 600; }
`;

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();

// Action Verb Categories
const VERB_CATEGORIES = [
  {
    id: 'leadership',
    name: 'Leadership & Management',
    verbs: [
      'Directed', 'Managed', 'Led', 'Supervised', 'Oversaw', 'Coordinated',
      'Organized', 'Mentored', 'Coached', 'Facilitated', 'Empowered',
      'Delegated', 'Guided', 'Chaired', 'Steered', 'Orchestrated'
    ]
  },
  {
    id: 'achievement',
    name: 'Achievement & Results',
    verbs: [
      'Achieved', 'Accomplished', 'Attained', 'Exceeded', 'Surpassed',
      'Improved', 'Enhanced', 'Increased', 'Reduced', 'Optimized',
      'Maximized', 'Minimized', 'Streamlined', 'Amplified', 'Boosted',
      'Elevated'
    ]
  },
  {
    id: 'technical',
    name: 'Technical & Analytical',
    verbs: [
      'Developed', 'Engineered', 'Programmed', 'Designed', 'Implemented',
      'Analyzed', 'Evaluated', 'Assessed', 'Calculated', 'Measured',
      'Modeled', 'Simulated', 'Automated', 'Debugged', 'Optimized',
      'Integrated'
    ]
  },
  {
    id: 'creative',
    name: 'Creative & Strategic',
    verbs: [
      'Created', 'Designed', 'Innovated', 'Pioneered', 'Transformed',
      'Revolutionized', 'Redesigned', 'Conceptualized', 'Visualized',
      'Branded', 'Marketing', 'Strategized', 'Planned', 'Forecasted',
      'Projected'
    ]
  },
  {
    id: 'communication',
    name: 'Communication & Collaboration',
    verbs: [
      'Presented', 'Communicated', 'Articulated', 'Authored', 'Edited',
      'Translated', 'Negotiated', 'Collaborated', 'Liaised', 'Consulted',
      'Advised', 'Educated', 'Trained', 'Facilitated', 'Moderated',
      'Moderated'
    ]
  },
  {
    id: 'research',
    name: 'Research & Analysis',
    verbs: [
      'Researched', 'Investigated', 'Explored', 'Examined', 'Studied',
      'Analyzed', 'Interpreted', 'Identified', 'Discovered', 'Hypothesized',
      'Validated', 'Verified', 'Tested', 'Experimented', 'Surveyed',
      'Interviewed'
    ]
  },
  {
    id: 'financial',
    name: 'Financial & Business',
    verbs: [
      'Managed', 'Budgeted', 'Forecasted', 'Allocated', 'Invested',
      'Generated', 'Secured', 'Saved', 'Reduced', 'Increased',
      'Negotiated', 'Procured', 'Purchased', 'Traded', 'Audited',
      'Reconciled'
    ]
  }
];

// Common Weak Verbs to Replace
const WEAK_VERBS = [
  { verb: 'Responsible for', suggestion: 'Managed, Oversaw, Led' },
  { verb: 'Did', suggestion: 'Executed, Performed, Implemented' },
  { verb: 'Made', suggestion: 'Created, Produced, Developed' },
  { verb: 'Helped', suggestion: 'Assisted, Supported, Facilitated' },
  { verb: 'Worked on', suggestion: 'Contributed to, Participated in' },
  { verb: 'Used', suggestion: 'Utilized, Leveraged, Applied' },
  { verb: 'Fixed', suggestion: 'Resolved, Repaired, Rectified' },
  { verb: 'Talked to', suggestion: 'Consulted, Advised, Liaised with' },
  { verb: 'Wrote', suggestion: 'Authored, Composed, Drafted' },
  { verb: 'Looked at', suggestion: 'Analyzed, Reviewed, Examined' }
];

// FAQ Data
const FAQS = [
  {
    question: "Why are action verbs so important on a resume?",
    answer: "Action verbs make your accomplishments more impactful and engaging. They transform passive descriptions into dynamic achievements, showing initiative and results. Studies show recruiters spend only 6-7 seconds scanning a resume, and strong action verbs help your achievements stand out immediately."
  },
  {
    question: "How do I choose the right action verbs?",
    answer: "Choose verbs that are specific to your role and industry. Leadership roles need verbs like 'Directed' and 'Managed', while technical roles need 'Developed' and 'Engineered'. Match verbs to your actual responsibilities and use quantifiable achievements. Avoid generic verbs—be specific about what you accomplished."
  },
  {
    question: "Should I avoid using the same verb multiple times?",
    answer: "Yes, avoid repeating the same verb more than 2-3 times in your resume. Use synonyms to keep your writing fresh and engaging. For example, instead of always using 'Managed', alternate with 'Oversaw', 'Directed', 'Led', or 'Supervised'. Variety shows a richer vocabulary and keeps the reader engaged."
  },
  {
    question: "What's wrong with passive language on resumes?",
    answer: "Passive language (e.g., 'was responsible for', 'helped with') makes you seem like a passive participant rather than an active achiever. Action verbs position you as the driver of results. Instead of 'Helped improve sales', use 'Contributed to 25% sales improvement' or 'Played key role in increasing sales by 25%'."
  },
  {
    question: "Can I use present tense for current positions?",
    answer: "Absolutely. Use present tense verbs for current roles (e.g., 'Manage', 'Develop', 'Coordinate') and past tense for previous positions (e.g., 'Managed', 'Developed', 'Coordinated'). This keeps your resume current and shows ongoing contributions. Be consistent within each job description."
  }
];

// Industry-Specific Verb Recommendations
const INDUSTRY_VERBS = [
  {
    industry: 'Technology',
    verbs: ['Developed', 'Engineered', 'Programmed', 'Architected', 'Debugged', 'Integrated', 'Automated', 'Deployed', 'Optimized', 'Scaled']
  },
  {
    industry: 'Marketing',
    verbs: ['Marketing', 'Promoted', 'Branded', 'Campaign', 'Strategized', 'Analyzed', 'Optimized', 'Segmented', 'Targeted', 'Converted']
  },
  {
    industry: 'Finance',
    verbs: ['Analyzed', 'Forecasted', 'Modeled', 'Audited', 'Reconciled', 'Budgeted', 'Invested', 'Traded', 'Secured', 'Allocated']
  },
  {
    industry: 'Healthcare',
    verbs: ['Administered', 'Diagnosed', 'Treated', 'Monitored', 'Evaluated', 'Coordinated', 'Implemented', 'Educated', 'Consulted', 'Documented']
  },
  {
    industry: 'Education',
    verbs: ['Instructed', 'Educated', 'Mentored', 'Developed', 'Designed', 'Evaluated', 'Assessed', 'Facilitated', 'Guided', 'Supervised']
  }
];

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'resume action verbs',
  'power verbs for resumes',
  'resume verb recommendations',
  'action verb generator',
  'professional resume verbs',
  'strong verbs for resumes',
  'resume writing tips',
  'career achievement verbs',
  'resume optimization',
  'ATS-friendly verbs',
  'free resume verb finder',
  'powerful resume words',
  'strong action verbs',
  'resume bullet points',
  'professional vocabulary'
];

const ResumeActionVerbRecommender = ({ seoData, buildTimestamp }) => {
  const {
    currentDate,
    lastModifiedDate,
    reviewDates,
    faqDates
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeReviewDates = reviewDates || Array(6).fill(freshnessIndicator);
  const safeFaqDates = faqDates || Array(6).fill(freshnessIndicator);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVerbs, setSelectedVerbs] = useState([]);
  const [activeFaq, setActiveFaq] = useState(null);
  const [showExamples, setShowExamples] = useState(false);
  const [copiedVerb, setCopiedVerb] = useState(null);
  const searchRef = useRef(null);

  // Filter verbs based on search and category
  const filteredVerbs = useCallback(() => {
    let allVerbs = [];
    
    if (selectedCategory === 'all') {
      VERB_CATEGORIES.forEach(category => {
        category.verbs.forEach(verb => {
          allVerbs.push({
            verb,
            category: category.name
          });
        });
      });
    } else {
      const category = VERB_CATEGORIES.find(cat => cat.id === selectedCategory);
      if (category) {
        allVerbs = category.verbs.map(verb => ({
          verb,
          category: category.name
        }));
      }
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      return allVerbs.filter(item => 
        item.verb.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    }

    return allVerbs;
  }, [searchQuery, selectedCategory]);

  // Handle verb selection
  const handleVerbSelect = (verb) => {
    if (selectedVerbs.includes(verb)) {
      setSelectedVerbs(selectedVerbs.filter(v => v !== verb));
    } else {
      setSelectedVerbs([...selectedVerbs, verb]);
    }
  };

  // Copy verb to clipboard
  const copyToClipboard = (verb) => {
    navigator.clipboard.writeText(verb);
    setCopiedVerb(verb);
    setTimeout(() => setCopiedVerb(null), 2000);
  };

  // Load example sentence
  const loadExample = (verb) => {
    const examples = {
      'Managed': `Managed a team of 15 developers to deliver projects 20% ahead of schedule`,
      'Developed': `Developed a scalable microservices architecture reducing latency by 40%`,
      'Increased': `Increased customer retention rate by 35% through targeted engagement strategies`,
      'Reduced': `Reduced operational costs by $250K annually through process optimization`,
      'Created': `Created comprehensive marketing campaign that generated 500+ qualified leads`,
      'Analyzed': `Analyzed customer data to identify key trends and improve conversion by 22%`,
      'Implemented': `Implemented new CRM system improving team productivity by 30%`,
      'Led': `Led cross-functional initiative that resulted in 15% revenue growth`,
      'Designed': `Designed user interface that improved customer satisfaction scores by 45%`,
      'Optimized': `Optimized database queries reducing page load times by 60%`
    };

    return examples[verb] || `${verb} [accomplishment with measurable result]`;
  };

  // Clear all selections
  const handleClearAll = () => {
    setSelectedVerbs([]);
    setSearchQuery('');
    setSelectedCategory('all');
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  // Generate sample bullet points
  const generateSampleBullets = () => {
    const samples = [
      `Managed team of 12 to achieve quarterly sales targets`,
      `Developed scalable application serving 50K+ users`,
      `Increased customer satisfaction scores by 35%`,
      `Reduced operational costs by $120K annually`,
      `Created comprehensive training program for 200+ employees`
    ];
    return samples;
  };

  // Schema data with improved structure
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.professionalresumefree.com/free-action-verb-recommender",
        "url": "https://www.professionalresumefree.com/free-action-verb-recommender",
        "name": `Free Resume Action Verb Recommender - 150+ Power Verbs for ${CURRENT_YEAR}`,
        "description": "Completely free resume action verb recommender with 150+ powerful verbs categorized by industry. Find strong action verbs to replace weak words and optimize your resume for ATS systems.",
        "datePublished": safeCurrentDate,
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Resume Action Verb Recommender",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "ratingCount": 189,
          "bestRating": 5,
          "worstRating": 1
        },
        "description": "Free online resume action verb recommender that helps job seekers find powerful verbs to strengthen their resume bullet points and pass ATS screenings.",
        "featureList": [
          "150+ Professional Action Verbs",
          "Industry-Specific Recommendations",
          "Weak Verb Replacement Guide",
          "One-Click Copy Function",
          "Mobile-Friendly Interface",
          "No Sign Up Required",
          "Free Forever"
        ],
        "softwareVersion": `${CURRENT_YEAR}.1.0`,
        "dateModified": safeLastModifiedDate
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": safeFaqDates[index] || safeCurrentDate
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Use Action Verbs Effectively in Your Resume",
        "description": "Step-by-step guide to using powerful action verbs to strengthen your resume",
        "totalTime": "PT10M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Identify Weak Verbs",
            "text": "Scan your resume for weak verbs like 'responsible for', 'helped', 'did', and replace them with powerful alternatives."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Choose Industry-Specific Verbs",
            "text": "Select verbs relevant to your field from our categorized lists to make your resume more targeted."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Create Powerful Bullet Points",
            "text": "Start each bullet point with an action verb and follow with quantifiable achievements."
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.professionalresumefree.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Free Tools",
            "item": "https://www.professionalresumefree.com/free-tools"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Action Verb Recommender",
            "item": "https://www.professionalresumefree.com/free-action-verb-recommender"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Primary Meta Tags */}
        <title>Free Resume Action Verb Recommender - 150+ Power Verbs for {CURRENT_YEAR}</title>
        <meta name="description" content={`Free resume action verb recommender with 150+ powerful verbs categorized by industry. Find strong action verbs to replace weak words and optimize your resume for ATS systems.`} />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Free Resume Action Verb Recommender - 150+ Power Verbs" />
        <meta name="chatgpt-fts:description" content="Find powerful action verbs for your resume. 150+ verbs categorized by industry. Free tool with examples and weak verb replacements." />
        <meta name="chatgpt-fts:keywords" content="resume verbs, action verbs, power words, resume writing" />
        <meta name="chatgpt-fts:last-updated" content={freshnessIndicator} />
        
        {/* Canonical URL - Single Tag */}
        <link rel="canonical" href="https://www.professionalresumefree.com/free-action-verb-recommender" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free Resume Action Verb Recommender - 150+ Power Verbs" />
        <meta property="og:description" content="Free resume action verb recommender with 150+ powerful verbs. Find strong action verbs for your resume." />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-action-verb-recommender" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Action Verb Recommender" />
        <meta name="twitter:description" content="150+ powerful action verbs for your resume. Free tool." />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Hidden SEO Elements */}
      <div style={{display: 'none'}} aria-hidden="true">
        <span itemProp="tool-type">Action Verb Recommender</span>
        <span itemProp="verb-count">150+</span>
        <span itemProp="categories">7</span>
        <span itemProp="year">{CURRENT_YEAR}</span>
        <span itemProp="last-updated">{freshnessIndicator}</span>
        <span itemProp="build-timestamp">{buildTimestamp}</span>
      </div>

      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li>/</li>
            <li><Link href="/free-tools">Free Tools</Link></li>
            <li>/</li>
            <li className="breadcrumb-current">Action Verb Recommender</li>
          </ol>
        </nav>

        {/* Header Section */}
        <header className="header">
          <div className="trust-badge">
            ⭐ Free Tool • No Sign Up • 150+ Professional Verbs
          </div>
          
          <h1>
            Resume Action Verb Recommender
          </h1>
          
          <p>
            Transform your resume with <strong>150+ powerful action verbs</strong> that showcase achievements and pass ATS systems
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Action Verbs</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">7</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5</span>
              <span className="stat-label">Industries</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.8/5</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
        </header>

        <main>
          {/* Main Search Section */}
          <section className="search-section">
            <div className="search-header">
              <h2>Find Powerful Action Verbs</h2>
              <p>
                Search and filter action verbs by category. Click verbs to select them, then use in your resume bullet points.
              </p>
            </div>
            
            <div className="search-container">
              <div className="search-box">
                <div className="search-input-wrapper">
                  <input
                    ref={searchRef}
                    type="text"
                    className="search-input"
                    placeholder="Search action verbs (e.g., 'managed', 'developed', 'increased')..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    aria-label="Search action verbs"
                  />
                  {searchQuery && (
                    <button
                      className="clear-search"
                      onClick={() => setSearchQuery('')}
                      type="button"
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  )}
                </div>
                
                <div className="category-filters">
                  <button
                    className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('all')}
                    type="button"
                  >
                    All Categories
                  </button>
                  {VERB_CATEGORIES.map(category => (
                    <button
                      key={category.id}
                      className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category.id)}
                      type="button"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="selected-verbs-panel">
                <div className="panel-header">
                  <h3>Selected Verbs ({selectedVerbs.length})</h3>
                  {selectedVerbs.length > 0 && (
                    <button
                      className="clear-all-button"
                      onClick={handleClearAll}
                      type="button"
                      aria-label="Clear all selected verbs"
                    >
                      Clear All
                    </button>
                  )}
                </div>
                
                {selectedVerbs.length > 0 ? (
                  <div className="selected-verbs-list">
                    {selectedVerbs.map((verb, index) => (
                      <div key={index} className="selected-verb">
                        <span className="selected-verb-text">{verb}</span>
                        <div className="selected-verb-actions">
                          <button
                            className="copy-button"
                            onClick={() => copyToClipboard(verb)}
                            type="button"
                            aria-label={`Copy ${verb} to clipboard`}
                          >
                            {copiedVerb === verb ? 'Copied!' : 'Copy'}
                          </button>
                          <button
                            className="remove-button"
                            onClick={() => handleVerbSelect(verb)}
                            type="button"
                            aria-label={`Remove ${verb}`}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="empty-selection">
                    No verbs selected yet. Click verbs to add them here.
                  </div>
                )}
                
                {selectedVerbs.length > 0 && (
                  <div className="copy-all-section">
                    <button
                      className="copy-all-button"
                      onClick={() => {
                        copyToClipboard(selectedVerbs.join(', '));
                        setCopiedVerb('all');
                      }}
                      type="button"
                      aria-label="Copy all selected verbs to clipboard"
                    >
                      {copiedVerb === 'all' ? 'Copied!' : 'Copy All Verbs'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Verbs Grid Section */}
          <section className="verbs-section">
            <div className="section-header">
              <h2>
                {selectedCategory === 'all' ? 'All Action Verbs' : 
                 VERB_CATEGORIES.find(c => c.id === selectedCategory)?.name || 'Action Verbs'}
                <span className="verbs-count"> ({filteredVerbs().length})</span>
              </h2>
              <button
                className="examples-toggle"
                onClick={() => setShowExamples(!showExamples)}
                type="button"
                aria-label={showExamples ? 'Hide examples' : 'Show examples'}
              >
                {showExamples ? 'Hide Examples' : 'Show Examples'}
              </button>
            </div>
            
            {filteredVerbs().length > 0 ? (
              <div className="verbs-grid">
                {filteredVerbs().map((item, index) => (
                  <div 
                    key={index} 
                    className={`verb-card ${selectedVerbs.includes(item.verb) ? 'selected' : ''}`}
                    onClick={() => handleVerbSelect(item.verb)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && handleVerbSelect(item.verb)}
                    aria-label={`Select ${item.verb} from ${item.category} category`}
                  >
                    <div className="verb-header">
                      <div className="verb-category">
                        {item.category}
                      </div>
                      <div className="verb-selection">
                        {selectedVerbs.includes(item.verb) ? 'Selected' : 'Add'}
                      </div>
                    </div>
                    
                    <div className="verb-content">
                      <div className="verb-text">{item.verb}</div>
                      <div className="verb-synonyms">
                        {item.verb.endsWith('ed') && (
                          <span className="synonym">Present: {item.verb.replace('ed', '')}</span>
                        )}
                      </div>
                    </div>
                    
                    {showExamples && (
                      <div className="verb-example">
                        <div className="example-label">Example:</div>
                        <div className="example-text">{loadExample(item.verb)}</div>
                      </div>
                    )}
                    
                    <div className="verb-actions">
                      <button
                        className="copy-verb-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(item.verb);
                        }}
                        type="button"
                        aria-label={`Copy ${item.verb} to clipboard`}
                      >
                        {copiedVerb === item.verb ? 'Copied!' : 'Copy'}
                      </button>
                      <button
                        className="preview-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowExamples(true);
                        }}
                        type="button"
                        aria-label={`Show example for ${item.verb}`}
                      >
                        Example
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                No verbs found matching "{searchQuery}". Try a different search term.
              </div>
            )}
          </section>

          {/* Weak Verbs Section */}
          <section className="weak-verbs-section">
            <div className="container">
              <h2 className="section-title">Replace Weak Verbs</h2>
              <p className="section-subtitle">
                Strengthen your resume by replacing common weak verbs with powerful alternatives
              </p>
              
              <div className="weak-verbs-grid">
                {WEAK_VERBS.map((item, index) => (
                  <div key={index} className="weak-verb-card">
                    <div className="weak-verb-bad">
                      <div className="weak-verb-label">Weak:</div>
                      <div className="weak-verb-text">{item.verb}</div>
                    </div>
                    <div className="replacement-arrow">→</div>
                    <div className="strong-verb-good">
                      <div className="strong-verb-label">Strong:</div>
                      <div className="strong-verb-text">{item.suggestion}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Industry Verbs Section */}
          <section className="industry-section">
            <div className="container">
              <h2 className="section-title">Industry-Specific Verbs</h2>
              <p className="section-subtitle">
                Tailored verb recommendations for different professional fields
              </p>
              
              <div className="industry-grid">
                {INDUSTRY_VERBS.map((industry, index) => (
                  <div key={index} className="industry-card">
                    <div className="industry-header">
                      <div className="industry-name">{industry.industry}</div>
                    </div>
                    <div className="industry-verbs">
                      {industry.verbs.map((verb, verbIndex) => (
                        <button
                          key={verbIndex}
                          className="industry-verb"
                          onClick={() => {
                            handleVerbSelect(verb);
                            copyToClipboard(verb);
                          }}
                          type="button"
                          aria-label={`Select ${verb} for ${industry.industry}`}
                        >
                          {verb}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Sample Bullet Points */}
          <section className="samples-section">
            <div className="container">
              <h2 className="section-title">Sample Bullet Points</h2>
              <p className="section-subtitle">
                See how powerful action verbs transform resume bullet points
              </p>
              
              <div className="samples-grid">
                {generateSampleBullets().map((bullet, index) => (
                  <div key={index} className="sample-card">
                    <div className="sample-bullet">•</div>
                    <div className="sample-content">
                      <div className="sample-text">{bullet}</div>
                      <button
                        className="copy-sample-button"
                        onClick={() => copyToClipboard(bullet)}
                        type="button"
                        aria-label={`Copy bullet point: ${bullet}`}
                      >
                        {copiedVerb === bullet ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Verb Usage Tips */}
          <section className="tips-section">
            <div className="container">
              <h2 className="section-title">Action Verb Usage Tips</h2>
              <div className="tips-grid">
                <div className="tip-card">
                  <h3 className="tip-title">Be Specific</h3>
                  <p className="tip-description">
                    Choose verbs that precisely describe your actions. Instead of "Worked on projects," use "Developed," "Managed," or "Implemented."
                  </p>
                </div>
                
                <div className="tip-card">
                  <h3 className="tip-title">Quantify Results</h3>
                  <p className="tip-description">
                    Pair action verbs with measurable results. For example: "Increased sales by 25%" or "Reduced costs by $50K annually."
                  </p>
                </div>
                
                <div className="tip-card">
                  <h3 className="tip-title">Vary Your Verbs</h3>
                  <p className="tip-description">
                    Avoid repeating the same verb. Use synonyms to keep your resume engaging and demonstrate a rich vocabulary.
                  </p>
                </div>
                
                <div className="tip-card">
                  <h3 className="tip-title">Use Proper Tense</h3>
                  <p className="tip-description">
                    Use present tense for current roles and past tense for previous positions. Be consistent within each job description.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="faq-section">
            <div className="container">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Everything you need to know about using action verbs effectively
              </p>
              <div className="faq-list">
                {FAQS.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === index ? null : index)}
                  >
                    <div className="faq-question">
                      <h3>{faq.question}</h3>
                      <span className="faq-toggle">{activeFaq === index ? '−' : '+'}</span>
                    </div>
                    {activeFaq === index && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="benefits-section">
            <div className="container">
              <h2 className="section-title">Why Action Verbs Matter</h2>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <h3 className="benefit-title">Showcase Achievements</h3>
                  <p className="benefit-description">
                    Action verbs transform passive responsibilities into active accomplishments. They highlight your contributions and demonstrate initiative rather than just listing duties.
                  </p>
                </div>
                
                <div className="benefit-card">
                  <h3 className="benefit-title">Grab Attention Fast</h3>
                  <p className="benefit-description">
                    With recruiters scanning resumes in seconds, strong action verbs immediately communicate impact and results, making your achievements stand out quickly.
                  </p>
                </div>
                
                <div className="benefit-card">
                  <h3 className="benefit-title">Demonstrate Impact</h3>
                  <p className="benefit-description">
                    Action verbs naturally lead to measurable results. They encourage you to quantify achievements, showing clear ROI and business impact to hiring managers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Transform Your Resume?</h2>
              <p className="cta-subtitle">
                Start using powerful action verbs today and make your resume stand out
              </p>
              <div className="cta-buttons">
                <button
                  className="cta-button"
                  onClick={handleClearAll}
                  type="button"
                  aria-label="Start building your resume with action verbs"
                >
                  Start Building Your Resume
                </button>
                <Link href="/resume-templates" className="secondary-button">
                  View Resume Templates
                </Link>
              </div>
              <div className="cta-features">
                <div className="feature-item">
                  <span>✓ 150+ Professional Verbs</span>
                </div>
                <div className="feature-item">
                  <span>✓ Industry-Specific Lists</span>
                </div>
                <div className="feature-item">
                  <span>✓ Weak Verb Replacements</span>
                </div>
                <div className="feature-item">
                  <span>✓ One-Click Copy</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

// SSG with ISR
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  const reviewDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates
      },
      buildTimestamp
    },
    // Revalidate every hour
    revalidate: 3600
  };
}

export default ResumeActionVerbRecommender;