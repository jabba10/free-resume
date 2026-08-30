/** @type {import('next').NextConfig} */

// ============================================================================
// SHARED CONSTANTS
// ============================================================================

const SITE_URL = 'https://professionalresumefree.com';
const SITE_NAME = 'Professional Resume Free';

// GoatCounter domains - MUST include gc.zgo.at where the script is hosted
const GOATCOUNTER_DOMAINS = [
  'https://gc.zgo.at',
  'https://professionalresumefree.goatcounter.com',
  'https://*.goatcounter.com',
];

// Optimized cache strategy for maximum performance and crawl budget
const CACHE = {
  // Long-term caching for static assets with hash (1 year)
  IMMUTABLE: 'public, max-age=31536000, immutable',
  BUNDLES: 'public, max-age=31536000, immutable',
  
  // Static assets with revalidation (7 days)
  STATIC_ASSETS: 'public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400',
  
  // HTML pages - Use stale-while-revalidate for SEO
  HTML: 'public, max-age=60, s-maxage=300, stale-while-revalidate=86400, stale-if-error=86400',
  
  // AI files - cache for 1 week
  AI_FILES: 'public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400, stale-if-error=86400',
  
  // AI dynamic content - shorter cache
  AI_DYNAMIC: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400, stale-if-error=86400',
  
  // Sitemaps and robots
  SITEMAP: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
  ROBOTS: 'public, max-age=86400, s-maxage=86400',
  
  // Schema.org structured data
  SCHEMA: 'public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400',
  
  // Production fallback
  PRODUCTION: 'public, max-age=300, s-maxage=600, stale-while-revalidate=3600, must-revalidate',
  DEVELOPMENT: 'no-cache, no-store, must-revalidate',
  
  // API routes
  API: 'public, max-age=60, s-maxage=300, stale-while-revalidate=600',
  
  // Feeds
  FEEDS: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
  
  // 404 pages
  NOT_FOUND: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
};

const AI_FILES = [
  '/ai/llms.txt',
  '/ai/llms-full.txt',
  '/ai/llms-seo.txt',
  '/ai/llms-ranking.txt',
  '/ai/llms-schema.json',
  '/ai/llms-vector.txt',
  '/ai/llms-crawlmap.txt',
  '/ai/llms-intent-map.txt',
  '/ai/llms-synonyms.txt',
  '/ai/llms-qa-bank.txt',
  '/ai/llms-topic-clusters.txt',
  '/ai/llms-entity-descriptions.txt',
  '/ai/llms-prompt-instructions.txt',
  '/ai/llms-canonical-answers.txt',
];

const AI_MANIFESTS = [
  '/openai.json',
  '/perplexity.json',
  '/claude.json',
  '/bingai.json',
  '/gemini.json',
];

const STRUCTURED_DATA_FILES = [
  '/schema/organization.json',
  '/schema/website.json',
  '/schema/breadcrumb.json',
  '/schema/faq.json',
  '/schema/howto.json',
  '/schema/article.json',
  '/schema/product.json',
];

const STATIC_EXTENSIONS = {
  images: 'jpg|jpeg|png|gif|ico|svg|webp|avif',
  fonts: 'woff|woff2|ttf|eot',
  media: 'mp4|webm|ogg|mp3|wav',
  documents: 'pdf|doc|docx|xls|xlsx|csv',
};

// GoatCounter CSP configuration
const goatcounterSources = GOATCOUNTER_DOMAINS.join(' ');
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${goatcounterSources}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: https: blob: ${goatcounterSources}`,
  "font-src 'self' data:",
  `connect-src 'self' ${goatcounterSources}`,
  "media-src 'self'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "manifest-src 'self'",
  "worker-src 'self'",
].join('; ');

// ============================================================================
// HELPERS
// ============================================================================

function cacheHeaders(cacheControl, contentType = null) {
  const headers = [
    { key: 'Cache-Control', value: cacheControl },
    { key: 'Vary', value: 'Accept-Encoding' },
  ];
  
  if (contentType) {
    headers.unshift({ key: 'Content-Type', value: contentType });
  }
  
  return headers;
}

function generateAILinkHeader() {
  const links = [
    `<${SITE_URL}/llms.txt>; rel="help"; type="text/plain"`,
    `<${SITE_URL}/llms-full.txt>; rel="alternate"; type="text/plain"`,
    `<${SITE_URL}/api/ai-context.json>; rel="alternate"; type="application/json"`,
    ...AI_MANIFESTS.map(manifest => `<${SITE_URL}${manifest}>; rel="service"`),
    `<${SITE_URL}/schema/organization.json>; rel="alternate"; type="application/ld+json"`,
    `<${SITE_URL}/schema/website.json>; rel="alternate"; type="application/ld+json"`,
  ];
  return links.join(', ');
}

function generateRobotsTag() {
  return [
    'index',
    'follow',
    'max-image-preview:large',
    'max-snippet:-1',
    'max-video-preview:-1',
    'notranslate',
  ].join(', ');
}

function securityHeaders() {
  return [
    { key: 'Content-Security-Policy', value: CONTENT_SECURITY_POLICY },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'X-DNS-Prefetch-Control', value: 'on' },
    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
    { key: 'Permissions-Policy', value: [
        'camera=()',
        'microphone=()',
        'geolocation=()',
        'interest-cohort=()',
        'autoplay=()',
        'payment=()',
      ].join(', ') 
    },
    { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
    { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  ];
}

function performanceHeaders() {
  return [
    { key: 'X-Cache-Tags', value: SITE_NAME },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'Accept-CH', value: 'Sec-CH-Viewport-Width, Sec-CH-DPR, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version, Sec-CH-UA-Mobile' },
    { key: 'Critical-CH', value: 'Sec-CH-Viewport-Width, Sec-CH-DPR' },
  ];
}

function seoHeaders() {
  return [
    { key: 'X-Robots-Tag', value: generateRobotsTag() },
    { key: 'Link', value: '<https://ogp.me/>; rel="profile"' },
    ...performanceHeaders(),
  ];
}

// ============================================================================
// NEXT CONFIG
// ============================================================================

const nextConfig = {
  // Use content-based build ID for better caching
  generateBuildId: async () => {
    // Use environment variable or fallback to a stable build ID
    return process.env.GIT_HASH || process.env.VERCEL_GIT_COMMIT_SHA || 'build-v1';
  },

  trailingSlash: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  compress: true,
  generateEtags: true,
  
  // Enable SWC minification for faster builds
  swcMinify: true,

  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    middlewarePrefetch: 'flexible',
    optimizePackageImports: ['lodash', 'date-fns', 'framer-motion'],
    serverComponentsExternalPackages: ['sharp'],
    optimisticClientCache: true,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,
    dangerouslyAllowSVG: false,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'professionalresumefree.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.professionalresumefree.com',
        pathname: '/**',
      },
    ],
  },

  modularizeImports: {
    lodash: { transform: 'lodash/{{member}}' },
  },

  async rewrites() {
    return [];
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.professionalresumefree.com' }],
        destination: 'https://professionalresumefree.com/:path*',
        permanent: true,
      },
    ];
  },

  async headers() {
    const isProduction = process.env.NODE_ENV === 'production';
    const aiLinkHeader = generateAILinkHeader();

    const aiFileHeaders = AI_FILES.map((file) => ({
      source: file,
      headers: cacheHeaders(
        CACHE.AI_FILES,
        file.endsWith('.json') 
          ? 'application/json; charset=utf-8' 
          : 'text/plain; charset=utf-8'
      ),
    }));

    const aiManifestHeaders = AI_MANIFESTS.map((file) => ({
      source: file,
      headers: cacheHeaders(CACHE.AI_FILES, 'application/json; charset=utf-8'),
    }));

    const schemaHeaders = STRUCTURED_DATA_FILES.map((file) => ({
      source: file,
      headers: [
        ...cacheHeaders(CACHE.SCHEMA, 'application/ld+json; charset=utf-8'),
        { key: 'Link', value: '<https://schema.org/>; rel="profile"' },
      ],
    }));

    return [
      // ============================================================
      // STATIC ASSETS - Maximum caching for performance
      // ============================================================
      
      // JS/CSS bundles with hashes - 1 year cache
      {
        source: '/_next/static/chunks/:path*',
        headers: cacheHeaders(CACHE.BUNDLES),
      },
      {
        source: '/_next/static/css/:path*',
        headers: cacheHeaders(CACHE.BUNDLES),
      },
      {
        source: '/_next/static/media/:path*',
        headers: cacheHeaders(CACHE.BUNDLES),
      },
      // Other Next.js static files
      {
        source: '/_next/static/:path*',
        headers: cacheHeaders(CACHE.IMMUTABLE),
      },
      
      // Images - 7 days cache with revalidation
      {
        source: `/:path*.(${STATIC_EXTENSIONS.images})`,
        headers: [
          ...cacheHeaders(CACHE.STATIC_ASSETS),
          { key: 'X-Robots-Tag', value: 'index, max-image-preview:large' },
        ],
      },
      
      // Fonts - 1 year immutable
      {
        source: `/:path*.(${STATIC_EXTENSIONS.fonts})`,
        headers: [
          ...cacheHeaders(CACHE.IMMUTABLE),
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
      
      // Media files - 1 year immutable
      {
        source: `/:path*.(${STATIC_EXTENSIONS.media})`,
        headers: [
          ...cacheHeaders(CACHE.IMMUTABLE),
          { key: 'X-Robots-Tag', value: 'index, max-video-preview:large' },
        ],
      },
      
      // Documents - 7 days cache
      {
        source: `/:path*.(${STATIC_EXTENSIONS.documents})`,
        headers: [
          ...cacheHeaders(CACHE.STATIC_ASSETS),
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
      
      // ============================================================
      // SEO & AI FILES
      // ============================================================
      
      // AI sitemap
      {
        source: '/ai-sitemap.xml',
        headers: [
          ...cacheHeaders(CACHE.AI_FILES, 'application/xml; charset=utf-8'),
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Link', value: `<${SITE_URL}/sitemap.xml>; rel="alternate"` },
        ],
      },
      
      // AI index
      {
        source: '/ai/index.html',
        headers: [
          ...cacheHeaders(CACHE.HTML, 'text/html; charset=utf-8'),
          { key: 'X-Robots-Tag', value: generateRobotsTag() },
        ],
      },
      
      // AI API
      {
        source: '/api/ai-context.json',
        headers: [
          ...cacheHeaders(CACHE.AI_DYNAMIC, 'application/json; charset=utf-8'),
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS' },
        ],
      },
      
      // Sitemap - 1 hour cache
      {
        source: '/sitemap.xml',
        headers: [
          ...cacheHeaders(CACHE.SITEMAP, 'application/xml; charset=utf-8'),
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      
      // Sitemap index
      {
        source: '/sitemap-index.xml',
        headers: [
          ...cacheHeaders(CACHE.SITEMAP, 'application/xml; charset=utf-8'),
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      
      // Robots.txt - 24 hours cache
      {
        source: '/robots.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: CACHE.ROBOTS },
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      
      // RSS Feed
      {
        source: '/feed.xml',
        headers: [
          ...cacheHeaders(CACHE.FEEDS, 'application/rss+xml; charset=utf-8'),
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      
      // Atom Feed
      {
        source: '/atom.xml',
        headers: [
          ...cacheHeaders(CACHE.FEEDS, 'application/atom+xml; charset=utf-8'),
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      
      // ============================================================
      // MAIN PAGES - Optimized for SEO with stale-while-revalidate
      // ============================================================
      
      // Homepage
      {
        source: '/',
        headers: [
          ...cacheHeaders(CACHE.HTML, 'text/html; charset=utf-8'),
          ...seoHeaders(),
          { key: 'Link', value: `<${SITE_URL}/sitemap.xml>; rel="sitemap"` },
        ],
      },
      
      // Resume templates listing
      {
        source: '/resume-templates',
        headers: [
          ...cacheHeaders(CACHE.HTML, 'text/html; charset=utf-8'),
          ...seoHeaders(),
          { key: 'X-Page-Type', value: 'listing' },
        ],
      },
      
      // Individual resume templates
      {
        source: '/resume-templates/:slug*',
        headers: [
          ...cacheHeaders(CACHE.HTML, 'text/html; charset=utf-8'),
          ...seoHeaders(),
          { key: 'X-Page-Type', value: 'template' },
        ],
      },
      
      // Blog listing
      {
        source: '/blog',
        headers: [
          ...cacheHeaders(CACHE.HTML, 'text/html; charset=utf-8'),
          ...seoHeaders(),
          { key: 'X-Page-Type', value: 'listing' },
        ],
      },
      
      // Individual blog posts
      {
        source: '/blog/:slug*',
        headers: [
          ...cacheHeaders(CACHE.HTML, 'text/html; charset=utf-8'),
          ...seoHeaders(),
          { key: 'X-Page-Type', value: 'article' },
          { key: 'X-Article-Type', value: 'blog' },
        ],
      },
      
      // Free tools listing
      {
        source: '/free-resume-tools',
        headers: [
          ...cacheHeaders(CACHE.HTML, 'text/html; charset=utf-8'),
          ...seoHeaders(),
          { key: 'X-Page-Type', value: 'listing' },
        ],
      },
      
      // Individual tools
      {
        source: '/free-resume-tools/:path*',
        headers: [
          ...cacheHeaders(CACHE.HTML, 'text/html; charset=utf-8'),
          ...seoHeaders(),
          { key: 'X-Page-Type', value: 'tool' },
        ],
      },
      
      // Resume builder
      {
        source: '/resume-builder',
        headers: [
          ...cacheHeaders(CACHE.HTML, 'text/html; charset=utf-8'),
          ...seoHeaders(),
          { key: 'X-Page-Type', value: 'application' },
        ],
      },
      
      // ============================================================
      // API ROUTES - Cached with stale-while-revalidate
      // ============================================================
      
      // API routes
      {
        source: '/api/:path*',
        headers: [
          ...cacheHeaders(CACHE.API, 'application/json; charset=utf-8'),
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS' },
        ],
      },
      
      // ============================================================
      // CATCH-ALL ROUTE - For any other pages
      // ============================================================
      
      // All other routes - cached HTML with full headers
      {
        source: '/:path*',
        headers: [
          ...cacheHeaders(isProduction ? CACHE.PRODUCTION : CACHE.DEVELOPMENT, 'text/html; charset=utf-8'),
          { key: 'X-Robots-Tag', value: generateRobotsTag() },
          { key: 'Link', value: aiLinkHeader },
          ...securityHeaders(),
          ...performanceHeaders(),
        ],
      },
      
      // ============================================================
      // ERROR PAGES
      // ============================================================
      
      // 404 page - cache for 1 hour
      {
        source: '/404',
        headers: [
          ...cacheHeaders(CACHE.NOT_FOUND, 'text/html; charset=utf-8'),
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      
      // 500 page - no cache
      {
        source: '/500',
        headers: [
          ...cacheHeaders(CACHE.DEVELOPMENT, 'text/html; charset=utf-8'),
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
      
      // Spread all the file-specific headers
      ...aiFileHeaders,
      ...aiManifestHeaders,
      ...schemaHeaders,
    ];
  },
};

module.exports = nextConfig;