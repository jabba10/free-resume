/** @type {import('next').NextConfig} */

// ============================================================================
// SHARED CONSTANTS
// ============================================================================

const SITE_URL = 'https://professionalresumefree.com';
const SITE_NAME = 'Professional Resume Free';

const CACHE = {
  IMMUTABLE: 'public, max-age=31536000, immutable',
  AI_FILES: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=604800',
  AI_DYNAMIC: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400, stale-if-error=86400',
  HTML: 'public, max-age=1800, s-maxage=3600, stale-while-revalidate=86400',
  SITEMAP: 'public, max-age=43200, s-maxage=43200, stale-while-revalidate=86400',
  ROBOTS: 'public, max-age=86400, s-maxage=86400',
  SCHEMA: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
  PRODUCTION: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
  DEVELOPMENT: 'no-cache, no-store, must-revalidate',
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

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://professionalresumefree.goatcounter.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://professionalresumefree.goatcounter.com",
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
    { key: 'ETag', value: 'true' },
    { key: 'Last-Modified', value: 'true' },
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
    { key: 'Vary', value: 'Accept-Encoding, Accept' },
  ];
}

// ============================================================================
// NEXT CONFIG
// ============================================================================

const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  compress: true,
  generateEtags: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    middlewarePrefetch: 'flexible',
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    qualities: [75, 85],
    dangerouslyAllowSVG: false,
    contentDispositionType: 'inline',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'professionalresumefree.com',
        pathname: '/**',
      },
    ],
  },

  modularizeImports: {
    lodash: { transform: 'lodash/{{member}}' },
  },

  async rewrites() {
    return [
      {
        source: '/stats',
        destination: 'https://professionalresumefree.goatcounter.com',
      },
    ];
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
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: CACHE.IMMUTABLE },
        ],
      },
      {
        source: `/:path*.(${STATIC_EXTENSIONS.images})`,
        headers: [
          { key: 'Cache-Control', value: CACHE.IMMUTABLE },
          { key: 'X-Robots-Tag', value: 'index, max-image-preview:large' },
        ],
      },
      {
        source: `/:path*.(${STATIC_EXTENSIONS.fonts})`,
        headers: [
          { key: 'Cache-Control', value: CACHE.IMMUTABLE },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
      {
        source: `/:path*.(${STATIC_EXTENSIONS.media})`,
        headers: [
          { key: 'Cache-Control', value: CACHE.IMMUTABLE },
          { key: 'X-Robots-Tag', value: 'index, max-video-preview:large' },
        ],
      },
      {
        source: `/:path*.(${STATIC_EXTENSIONS.documents})`,
        headers: [
          { key: 'Cache-Control', value: CACHE.IMMUTABLE },
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
      {
        source: '/ai-sitemap.xml',
        headers: [
          ...cacheHeaders(CACHE.AI_FILES, 'application/xml; charset=utf-8'),
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Link', value: `<${SITE_URL}/sitemap.xml>; rel="alternate"` },
        ],
      },
      {
        source: '/ai/index.html',
        headers: [
          ...cacheHeaders(CACHE.HTML, 'text/html; charset=utf-8'),
          { key: 'Link', value: '<https://ogp.me/>; rel="profile"' },
          { key: 'X-Robots-Tag', value: generateRobotsTag() },
          { key: 'X-Original-Content', value: 'true' },
        ],
      },
      {
        source: '/api/ai-context.json',
        headers: [
          ...cacheHeaders(CACHE.AI_DYNAMIC, 'application/json; charset=utf-8'),
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS' },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          ...cacheHeaders(CACHE.SITEMAP, 'application/xml; charset=utf-8'),
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Link', value: `<${SITE_URL}/sitemap.xml>; rel="self"` },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: CACHE.ROBOTS },
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      {
        source: '/feed.xml',
        headers: [
          ...cacheHeaders('public, max-age=3600, s-maxage=3600', 'application/rss+xml; charset=utf-8'),
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      {
        source: '/atom.xml',
        headers: [
          ...cacheHeaders('public, max-age=3600, s-maxage=3600', 'application/atom+xml; charset=utf-8'),
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      {
        source: '/(|resume-templates|free-resume-tools|resume-builder)',
        headers: [
          ...cacheHeaders(CACHE.HTML),
          { key: 'Link', value: '<https://ogp.me/>; rel="profile"' },
          { key: 'X-Robots-Tag', value: generateRobotsTag() },
          { key: 'X-Original-Content', value: 'true' },
        ],
      },
      {
        source: '/resume-templates/:slug*',
        headers: [
          ...cacheHeaders(CACHE.HTML),
          { key: 'Link', value: '<https://ogp.me/>; rel="profile"' },
          { key: 'X-Robots-Tag', value: generateRobotsTag() },
          { key: 'X-Original-Content', value: 'true' },
          { key: 'X-Page-Type', value: 'template' },
        ],
      },
      {
        source: '/blog/:slug*',
        headers: [
          ...cacheHeaders(CACHE.HTML),
          { key: 'Link', value: '<https://ogp.me/>; rel="profile"' },
          { key: 'X-Robots-Tag', value: generateRobotsTag() },
          { key: 'X-Original-Content', value: 'true' },
          { key: 'X-Page-Type', value: 'article' },
          { key: 'X-Article-Type', value: 'blog' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: isProduction ? CACHE.PRODUCTION : CACHE.DEVELOPMENT,
          },
          { key: 'X-Robots-Tag', value: generateRobotsTag() },
          { key: 'Link', value: aiLinkHeader },
          { key: 'AI-Cache-Optimized', value: 'true' },
          { key: 'AI-Cache-TTL', value: '3600' },
          { key: 'AI-Cache-Strategy', value: 'stale-while-revalidate' },
          { key: 'AI-Content-Version', value: '2.0' },
          { key: 'AI-Indexable', value: 'true' },
          { key: 'AI-Content-Type', value: 'comprehensive' },
          { key: 'AI-Entity-Rich', value: 'true' },
          { key: 'AI-Semantic-Version', value: '1.0' },
          { key: 'X-Content-Freshness', value: 'dynamic' },
          { key: 'X-Original-Source', value: SITE_URL },
          ...securityHeaders(),
        ],
      },
      {
        source: '/404',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600' },
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      {
        source: '/500',
        headers: [
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
      ...aiFileHeaders,
      ...aiManifestHeaders,
      ...schemaHeaders,
    ];
  },
};

module.exports = nextConfig;