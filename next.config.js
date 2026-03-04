// next.config.js - Optimized for ISR, Analytics, and AI GEO Discovery
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  compress: true,
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  async redirects() {
    return [
      // Redirect http://professionalresumefree.com and http://www.professionalresumefree.com to https://www.professionalresumefree.com
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'professionalresumefree.com',
          },
        ],
        destination: 'https://www.professionalresumefree.com/:path*',
        permanent: true, // 301 redirect
      },
      // Redirect https://professionalresumefree.com (non-www HTTPS) to https://www.professionalresumefree.com
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'professionalresumefree.com',
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'https',
          },
        ],
        destination: 'https://www.professionalresumefree.com/:path*',
        permanent: true, // 301 redirect
      },
      // Redirect http://www.professionalresumefree.com to https://www.professionalresumefree.com
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.professionalresumefree.com',
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.professionalresumefree.com/:path*',
        permanent: true, // 301 redirect
      },
    ];
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
        // Apply to all routes
        source: '/:path*',
        headers: [
          // --- AI & LLM DISCOVERY HEADERS ---
          {
            key: 'Link',
            // rel="help" points to the summary; rel="alternate" points to the full data dump
            value: '<https://www.professionalresumefree.com/llms.txt>; rel="help"; type="text/plain", <https://www.professionalresumefree.com/llms-full.txt>; rel="alternate"; type="text/plain"',
          },
          // --- EXISTING SECURITY & PERFORMANCE HEADERS ---
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; " +
                   "script-src 'self' 'unsafe-inline' " +
                   "https://www.googletagmanager.com " +
                   "https://www.google-analytics.com " +
                   "https://gc.zgo.at " +
                   "https://professionalresumefree.goatcounter.com; " +
                   "style-src 'self' 'unsafe-inline'; " +
                   "img-src 'self' data: https:; " +
                   "font-src 'self'; " +
                   "connect-src 'self' " +
                   "https://www.google-analytics.com " +
                   "https://professionalresumefree.goatcounter.com; " +
                   "frame-ancestors 'none'; " +
                   "base-uri 'self'; " +
                   "form-action 'self'"
          },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      },
      // Ensure the text files are served with the correct mime-type for AI crawlers
      {
        source: '/llms.txt',
        headers: [{ key: 'Content-Type', value: 'text/plain; charset=utf-8' }]
      },
      {
        source: '/llms-full.txt',
        headers: [{ key: 'Content-Type', value: 'text/plain; charset=utf-8' }]
      }
    ];
  }
};

module.exports = nextConfig;