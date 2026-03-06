// next.config.js - Optimized for Next.js 16.1.1
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  compress: true,
  reactStrictMode: true,

  // SWC minification is now default in Next.js 15+, so remove the flag

  // Optimize bundle size - using proper Next.js 16 config
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Experimental features (supported in 16.1.1)
  experimental: {
    optimizeCss: true, // Requires critters to be installed
    scrollRestoration: true,
    // optimisticClientCache was renamed/removed in 16.1.1
  },

  // Configure image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for images
    // Add the quality setting that matches your usage
    qualities: [75, 85], // Add both quality values used in your code
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.professionalresumefree.com',
        pathname: '/**',
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/stats',
        destination: 'https://professionalresumefree.goatcounter.com',
      },
    ];
  },

  async headers() {
    return [
      {
        // Static assets - Cache for 1 year (31536000 seconds)
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Images - Cache for 1 year
        source: '/:path*.(jpg|jpeg|png|gif|ico|svg|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Fonts - Cache for 1 year
        source: '/:path*.(woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // PDF and document files - Cache for 1 month
        source: '/:path*.(pdf|doc|docx|txt)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // HTML pages - shorter cache, revalidate frequently
        source: '/(.*).html$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Main routes - moderate caching with revalidation
        source: '/(|resume-templates|free-resume-tools|resume-builder)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=1800, s-maxage=3600, stale-while-revalidate=86400, stale-if-error=86400',
          },
        ],
      },
      {
        // Apply to all routes
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: process.env.NODE_ENV === 'production' 
              ? 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400, stale-if-error=86400'
              : 'no-cache, no-store, must-revalidate',
          },
          // --- AI & LLM DISCOVERY HEADERS ---
          {
            key: 'Link',
            value: '<https://www.professionalresumefree.com/llms.txt>; rel="help"; type="text/plain", <https://www.professionalresumefree.com/llms-full.txt>; rel="alternate"; type="text/plain"',
          },
          // --- ENHANCED SECURITY & PERFORMANCE HEADERS ---
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; " +
                   "script-src 'self' 'unsafe-inline' 'unsafe-eval' " +
                   "https://www.googletagmanager.com " +
                   "https://www.google-analytics.com " +
                   "https://gc.zgo.at " +
                   "https://professionalresumefree.goatcounter.com; " +
                   "style-src 'self' 'unsafe-inline'; " +
                   "img-src 'self' data: https: blob:; " +
                   "font-src 'self' data:; " +
                   "connect-src 'self' " +
                   "https://www.google-analytics.com " +
                   "https://professionalresumefree.goatcounter.com; " +
                   "frame-ancestors 'none'; " +
                   "base-uri 'self'; " +
                   "form-action 'self'; " +
                   "manifest-src 'self'"
          },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ]
      },
      {
        source: '/llms.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ]
      },
      {
        source: '/llms-full.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=43200, stale-while-revalidate=604800' },
        ]
      },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=43200, stale-while-revalidate=86400' },
        ]
      },
      {
        source: '/robots.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ]
      },
      {
        source: '/manifest.json',
        headers: [
          { key: 'Content-Type', value: 'application/manifest+json' },
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ]
      }
    ];
  },

  // Production build optimizations
  productionBrowserSourceMaps: false,
  
  // Increase build performance
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
    },
  },

  // Output configuration
  output: 'standalone',
};

module.exports = nextConfig;