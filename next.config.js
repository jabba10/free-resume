// next.config.js - Simplified version

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; img-src 'self' https://www.google-analytics.com https://stats.g.doubleclick.net data:; connect-src 'self' https://www.google-analytics.com;"
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ];
  },

  // 🔥 Added IndexNow trigger after build
  async afterBuild() {
    await fetch("https://www.professionalresumefree.com/api/indexnow", { method: "POST" });
  }
};

module.exports = nextConfig;
