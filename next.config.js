/** @type {import('next').NextConfig} */

// ============================================================================
// SHARED CONSTANTS
// ============================================================================

const SITE_URL = 'https://professionalresumefree.com';
const SITE_NAME = 'Professional Resume Free';

// GoatCounter domains
const GOATCOUNTER_DOMAINS = [
  'https://gc.zgo.at',
  'https://professionalresumefree.goatcounter.com',
  'https://*.goatcounter.com',
];

// Google Analytics domains
const GOOGLE_ANALYTICS_DOMAINS = [
  'https://www.google-analytics.com',
  'https://ssl.google-analytics.com',
  'https://*.google-analytics.com',
  'https://*.analytics.google.com',
  'https://*.g.doubleclick.net',
  'https://*.google.com',
  'https://*.googletagmanager.com',
];

// Optimized cache strategy
const CACHE = {
  // Long-term caching for static assets (1 year)
  IMMUTABLE: 'public, max-age=31536000, immutable',
  
  // Static assets with revalidation (7 days)
  STATIC_ASSETS: 'public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400',
  
  // HTML pages - Use stale-while-revalidate for SEO
  HTML: 'public, max-age=60, s-maxage=300, stale-while-revalidate=86400, stale-if-error=86400',
  
  // AI files - cache for 1 week
  AI_FILES: 'public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400, stale-if-error=86400',
  
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

// ============================================================================
// HELPERS
// ============================================================================

function cacheHeaders(cacheControl) {
  return [
    { key: 'Cache-Control', value: cacheControl },
  ];
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

// ============================================================================
// NEXT CONFIG
// ============================================================================

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  generateEtags: true,
  swcMinify: true,
  
  // Stable build ID
  generateBuildId: async () => {
    return process.env.VERCEL_GIT_COMMIT_SHA || 'build-v1';
  },

  // Images optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,
    dangerouslyAllowSVG: false,
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

  // Redirects
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

  // Headers - SIMPLIFIED AND SAFE
  async headers() {
    const isProduction = process.env.NODE_ENV === 'production';

    const aiFileHeaders = AI_FILES.map((file) => ({
      source: file,
      headers: cacheHeaders(CACHE.AI_FILES),
    }));

    const aiManifestHeaders = AI_MANIFESTS.map((file) => ({
      source: file,
      headers: cacheHeaders(CACHE.AI_FILES),
    }));

    const schemaHeaders = STRUCTURED_DATA_FILES.map((file) => ({
      source: file,
      headers: cacheHeaders(CACHE.SCHEMA),
    }));

    return [
      // Static assets - 1 year cache
      {
        source: '/_next/static/:path*',
        headers: cacheHeaders(CACHE.IMMUTABLE),
      },
      
      // Images - 7 days cache
      {
        source: `/:path*.(${STATIC_EXTENSIONS.images})`,
        headers: cacheHeaders(CACHE.STATIC_ASSETS),
      },
      
      // Fonts - 1 year cache
      {
        source: `/:path*.(${STATIC_EXTENSIONS.fonts})`,
        headers: [
          ...cacheHeaders(CACHE.IMMUTABLE),
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
      
      // Media files - 1 year cache
      {
        source: `/:path*.(${STATIC_EXTENSIONS.media})`,
        headers: cacheHeaders(CACHE.IMMUTABLE),
      },
      
      // Documents - 7 days cache
      {
        source: `/:path*.(${STATIC_EXTENSIONS.documents})`,
        headers: cacheHeaders(CACHE.STATIC_ASSETS),
      },
      
      // AI files
      ...aiFileHeaders,
      ...aiManifestHeaders,
      ...schemaHeaders,
      
      // Sitemap
      {
        source: '/sitemap.xml',
        headers: [
          ...cacheHeaders(CACHE.SITEMAP),
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      
      // Robots.txt
      {
        source: '/robots.txt',
        headers: cacheHeaders(CACHE.ROBOTS),
      },
      
      // HTML pages - Safe caching for SEO
      {
        source: '/:path*',
        headers: [
          ...cacheHeaders(isProduction ? CACHE.HTML : CACHE.DEVELOPMENT),
          { key: 'X-Robots-Tag', value: generateRobotsTag() },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
      
      // API routes
      {
        source: '/api/:path*',
        headers: [
          ...cacheHeaders(CACHE.API),
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;