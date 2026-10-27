// scripts/extract-faqs.js
// Extracts FAQs from all page files (supports both JSX and object-array patterns)
// Usage: node scripts/extract-faqs.js

const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '../src/pages');
const OUTPUT_DIR = path.join(__dirname, '../public/ai');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'faqs-map.json');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Get the current year to resolve ${currentYear} template variables
const CURRENT_YEAR = new Date().getFullYear();

/**
 * Resolves template literals like `Answer with ${currentYear}` → `Answer with 2026`
 * Also strips common HTML entities and collapses whitespace.
 */
function resolveTemplateLiterals(text) {
  if (!text) return '';
  let resolved = text;
  
  // Replace ${currentYear} with actual year
  resolved = resolved.replace(/\$\{currentYear\}/g, String(CURRENT_YEAR));
  
  // Replace ${new Date().getFullYear()} if used
  resolved = resolved.replace(/\$\{new Date\(\)\.getFullYear\(\)\}/g, String(CURRENT_YEAR));
  
  // Remove any other unresolved template variables
  resolved = resolved.replace(/\$\{[^}]+\}/g, '');
  
  // Clean up whitespace
  resolved = resolved.replace(/\s+/g, ' ').trim();
  
  return resolved;
}

/**
 * Extracts FAQs from a page file using multiple pattern matchers.
 * Handles:
 *  - const faqData = [{ question: "...", answer: "..." }]
 *  - const faqs = [{ q: "...", a: "..." }]
 *  - <h3>Question?</h3><p>Answer</p> in JSX
 */
function extractFAQsFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const faqs = [];

  // ─────────────────────────────────────────────────────────
  // PATTERN 1: Object array with question/answer (STRING quotes)
  // Matches: { question: "What is ...?", answer: "The answer..." }
  // ─────────────────────────────────────────────────────────
  const qaDoubleQuote = /question\s*:\s*"([^"]+?)"\s*,\s*answer\s*:\s*"([^"]{20,})"/gi;
  let match;
  while ((match = qaDoubleQuote.exec(content)) !== null) {
    const question = resolveTemplateLiterals(match[1]);
    const answer = resolveTemplateLiterals(match[2]);
    if (question && answer && question.endsWith('?') && !faqs.some(f => f.question === question)) {
      faqs.push({ question, answer });
    }
  }

  // ─────────────────────────────────────────────────────────
  // PATTERN 2: Object array with question/answer (SINGLE quotes)
  // Matches: { question: 'What is ...?', answer: 'The answer...' }
  // ─────────────────────────────────────────────────────────
  const qaSingleQuote = /question\s*:\s*'([^']+?)'\s*,\s*answer\s*:\s*'([^']{20,})'/gi;
  while ((match = qaSingleQuote.exec(content)) !== null) {
    const question = resolveTemplateLiterals(match[1]);
    const answer = resolveTemplateLiterals(match[2]);
    if (question && answer && question.endsWith('?') && !faqs.some(f => f.question === question)) {
      faqs.push({ question, answer });
    }
  }

  // ─────────────────────────────────────────────────────────
  // PATTERN 3: Object array with question/answer (TEMPLATE literals with backticks)
  // Matches: { question: `What is ... ${currentYear}?`, answer: `The answer...` }
  // This is YOUR pattern
  // ─────────────────────────────────────────────────────────
  const qaBacktick = /question\s*:\s*`([^`]+?)`\s*,\s*answer\s*:\s*`([^`]{20,})`/gi;
  while ((match = qaBacktick.exec(content)) !== null) {
    const question = resolveTemplateLiterals(match[1]);
    const answer = resolveTemplateLiterals(match[2]);
    if (question && answer && question.endsWith('?') && !faqs.some(f => f.question === question)) {
      faqs.push({ question, answer });
    }
  }

  // ─────────────────────────────────────────────────────────
  // PATTERN 4: Mixed quotes (question in backtick, answer in double-quote)
  // Matches: { question: `...`, answer: "..." }
  // ─────────────────────────────────────────────────────────
  const qaMixed1 = /question\s*:\s*`([^`]+?)`\s*,\s*answer\s*:\s*"([^"]{20,})"/gi;
  while ((match = qaMixed1.exec(content)) !== null) {
    const question = resolveTemplateLiterals(match[1]);
    const answer = resolveTemplateLiterals(match[2]);
    if (question && answer && question.endsWith('?') && !faqs.some(f => f.question === question)) {
      faqs.push({ question, answer });
    }
  }

  const qaMixed2 = /question\s*:\s*"([^"]+?)"\s*,\s*answer\s*:\s*`([^`]{20,})`/gi;
  while ((match = qaMixed2.exec(content)) !== null) {
    const question = resolveTemplateLiterals(match[1]);
    const answer = resolveTemplateLiterals(match[2]);
    if (question && answer && question.endsWith('?') && !faqs.some(f => f.question === question)) {
      faqs.push({ question, answer });
    }
  }

  // ─────────────────────────────────────────────────────────
  // PATTERN 5: Short form q/a (for other pages)
  // Matches: { q: "...", a: "..." }
  // ─────────────────────────────────────────────────────────
  const qaShort = /q\s*:\s*[`"']([^`"']+?\?)[`"']\s*,\s*a\s*:\s*[`"']([^`"']{20,})[`"']/gi;
  while ((match = qaShort.exec(content)) !== null) {
    const question = resolveTemplateLiterals(match[1]);
    const answer = resolveTemplateLiterals(match[2]);
    if (question && answer && !faqs.some(f => f.question === question)) {
      faqs.push({ question, answer });
    }
  }

  // ─────────────────────────────────────────────────────────
  // PATTERN 6: Raw JSX <h3>Question?</h3><p>Answer</p>
  // ─────────────────────────────────────────────────────────
  const jsxPattern = /<h[2-5][^>]*>([^<]*\?)<\/h[2-5]>[\s\S]*?<p[^>]*>([^<]{20,})<\/p>/gi;
  while ((match = jsxPattern.exec(content)) !== null) {
    const question = resolveTemplateLiterals(match[1]);
    const answer = resolveTemplateLiterals(match[2]);
    if (question && answer && !faqs.some(f => f.question === question)) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) {
    console.error(`❌ Directory not found: ${dir}`);
    return;
  }
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (!['api', 'node_modules', '.next'].includes(file)) {
        walkDir(filePath, callback);
      }
    } else if ((file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.tsx')) && !file.startsWith('_')) {
      callback(filePath);
    }
  });
}

const faqsMap = {};
let totalPages = 0;
let totalFAQs = 0;
let pagesWithoutFAQs = 0;

walkDir(PAGES_DIR, (filePath) => {
  // Generate route from file path
  let route = filePath
    .replace(PAGES_DIR, '')
    .replace(/\\/g, '/')
    .replace(/\.(js|jsx|tsx)$/, '')
    .replace(/\/index$/, '')
    .replace(/^\/index$/, '/') || '/';

  const faqs = extractFAQsFromFile(filePath);
  
  if (faqs.length > 0) {
    faqsMap[route] = faqs;
    totalPages++;
    totalFAQs += faqs.length;
    console.log(`✅ ${route} → ${faqs.length} FAQs`);
  } else {
    pagesWithoutFAQs++;
  }
});

// Write output
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(faqsMap, null, 2));

console.log('\n═══════════════════════════════════════');
console.log(`✅ Pages with FAQs: ${totalPages}`);
console.log(`⏭️  Pages without FAQs: ${pagesWithoutFAQs}`);
console.log(`✅ Total FAQs extracted: ${totalFAQs}`);
console.log(`✅ Output saved to: ${OUTPUT_FILE}`);
console.log('═══════════════════════════════════════');